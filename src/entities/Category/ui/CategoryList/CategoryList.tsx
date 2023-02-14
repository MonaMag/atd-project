import React, { ChangeEvent, Key, useState } from 'react';
import {
    Collapse,
    ConfigProvider,
    Input,
    Radio,
    RadioChangeEvent,
    Space,
    Tag,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CategorySchema } from '../../model/types/categories';
import { getFilteredTreeData } from '../../../../shared/helper/getFilteredTreeData';
import cls from './CategoryList.module.css';
import { prepareTreeData } from '../../../../shared/helper/prepareTreeData';
import { TreeComponent } from '../TreeComponent/TreeComponent';
import { SliderComponent } from '../SliderComponent/SliderComponent';
import { AntTreeNodeCheckedEvent } from 'antd/es/tree';

interface CategoryListProps {
    className?: string;
    category: CategorySchema;
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [value, setValue] = React.useState('include');
    const [includeCheckedKey, setIncludeCheckedKey] = useState<Key[]>([]);
    const [excludeCheckedKey, setExcludeCheckedKey] = useState<Key[]>([]);
    const [includeTagsTitle, setIncludeTagsTitle] = useState<any[]>([]);
    const [excludeTagsTitle, setExcludeTagsTitle] = useState<string[]>([]);

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const onChangeTab = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        console.log('onChangeTab: ', e.target.value);
    };

    const onCheckInclude = (checkedKeys: any, e: AntTreeNodeCheckedEvent) => {
        setIncludeCheckedKey(checkedKeys);
        const includeTags: any[] = [];
        if (e.checkedNodes) {
            e.checkedNodes.forEach((el: any) => {
                if (el.children) return;
                includeTags.push({ key: el.key, title: el.title });
            });
        }
        setIncludeTagsTitle(includeTags);
        console.log('includeCheckedKey: ', checkedKeys);
        console.log('includeTags: ', includeTags);
    };

    const onCheckExclude = (checkedKeys: any, e: AntTreeNodeCheckedEvent) => {
        setExcludeCheckedKey(checkedKeys);
        const excludeTags: any[] = [];
        if (e.checkedNodes) {
            e.checkedNodes.forEach((el: any) => {
                if (el.children) return;
                excludeTags.push({ key: el.key, title: el.title });
            });
        }
        setExcludeTagsTitle(excludeTags);
        console.log('excludeCheckedKey: ', checkedKeys);
    };

    const handleRemoveInclude = (key: string) => {
        setIncludeCheckedKey(includeCheckedKey.filter((p) => p !== key));
        //setIncludeTagsTitle(includeTagsTitle.filter((t) => t !== title));
    };

    const handleRemoveExclude = (key: string): void => {
        setExcludeCheckedKey(excludeCheckedKey.filter((p) => p !== key));
        //setExcludeTagsTitle(excludeTagsTitle.filter((t) => t !== title));
    };

    const filteredData =
        category.items && getFilteredTreeData(category.items, searchValue);

    const renderContent = (tab: string) => {
        switch (tab) {
            case 'include':
                return category.displayType === 'tree' ? (
                    <TreeComponent
                        onCheck={onCheckInclude}
                        checkedKeys={includeCheckedKey}
                        treeData={
                            category.title === 'Пол'
                                ? prepareTreeData(
                                      filteredData!,
                                      excludeCheckedKey,
                                  )
                                : prepareTreeData(
                                      [
                                          {
                                              key: '01',
                                              title: 'Выбрать все',
                                              children: filteredData,
                                          },
                                      ],
                                      excludeCheckedKey,
                                  )
                        }
                    />
                ) : (
                    <SliderComponent />
                );
            case 'exclude':
                return (
                    <TreeComponent
                        onCheck={onCheckExclude}
                        checkedKeys={excludeCheckedKey}
                        treeData={prepareTreeData(
                            [
                                {
                                    key: '01',
                                    title: 'Выбрать все',
                                    children: filteredData,
                                },
                            ],
                            includeCheckedKey,
                        )}
                    />
                );
        }
    };
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorBorder: '#edf0f2',
                    },
                }}
            >
                <Collapse
                    className={cls.collapseContainer}
                    expandIconPosition="end"
                    accordion
                >
                    <Collapse.Panel
                        key={category.id}
                        header={
                            <div className={cls.collapseHeader}>
                                <div className={cls.headerTitle}>
                                    {category.title + ':'}
                                </div>
                                <div className={cls.headerTags}>
                                    {includeCheckedKey.length > 0 && (
                                        <div className={cls.headerIncludeTags}>
                                            {includeTagsTitle}
                                        </div>
                                    )}
                                    {excludeCheckedKey.length > 0 && (
                                        <div className={cls.headerIncludeTags}>
                                            {excludeTagsTitle}
                                        </div>
                                    )}
                                </div>
                            </div>
                        }
                        className={cls.collapsePanel}
                    >
                        <div className={cls.panelContent}>
                            <div className={cls.contentWrapper}>
                                {category.displayParams.enableExclude ? (
                                    <Radio.Group
                                        defaultValue="include"
                                        value={value}
                                        className={cls.tabGroup}
                                        buttonStyle={'solid'}
                                        onChange={onChangeTab}
                                    >
                                        <Radio.Button
                                            value="include"
                                            className={cls.tabButton}
                                        >
                                            Включить
                                        </Radio.Button>
                                        <Radio.Button
                                            value="exclude"
                                            className={cls.tabButton}
                                        >
                                            Исключить
                                        </Radio.Button>
                                        <div className={cls.content}>
                                            <div className={cls.searchWrapper}>
                                                <Input
                                                    allowClear
                                                    className={cls.search}
                                                    placeholder="Search"
                                                    prefix={<SearchOutlined />}
                                                    value={searchValue}
                                                    onChange={onChangeSearch}
                                                />
                                            </div>
                                            <div className={cls.category}>
                                                {renderContent(value)}
                                            </div>
                                        </div>
                                    </Radio.Group>
                                ) : (
                                    <div
                                        className={`${
                                            category.title !== 'Возраст'
                                                ? cls.content
                                                : cls.categoryAge
                                        }`}
                                    >
                                        {category.displayParams
                                            .enableSearch && (
                                            <div className={cls.searchWrapper}>
                                                <Input
                                                    allowClear
                                                    className={cls.search}
                                                    placeholder="Search"
                                                    prefix={<SearchOutlined />}
                                                    value={searchValue}
                                                    onChange={onChangeSearch}
                                                />
                                            </div>
                                        )}
                                        <div className={cls.category}>
                                            {renderContent('include')}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {category.title !== 'Возраст' && (
                                <div className={cls.choiceWrapper}>
                                    <Space direction={'vertical'} size={6} wrap>
                                        {includeTagsTitle.length > 0 &&
                                            includeTagsTitle.map((i) => {
                                                const includeClose = () => {
                                                    handleRemoveInclude(i.key);
                                                };
                                                return (
                                                    <Tag
                                                        key={i.key}
                                                        closable
                                                        color={'#3fcbff'}
                                                        onClose={includeClose}
                                                        className={cls.choice}
                                                    >
                                                        {i.title}
                                                    </Tag>
                                                );
                                            })}
                                        {excludeTagsTitle.length > 0 &&
                                            excludeTagsTitle.map((title) => {
                                                return (
                                                    <Tag
                                                        key={title}
                                                        closable
                                                        color={'#d81b3b'}
                                                        onClose={(): void =>
                                                            handleRemoveExclude(
                                                                title,
                                                            )
                                                        }
                                                        className={cls.choice}
                                                    >
                                                        {title}
                                                    </Tag>
                                                );
                                            })}
                                    </Space>
                                </div>
                            )}
                        </div>
                    </Collapse.Panel>
                </Collapse>
            </ConfigProvider>
        </>
    );
};
export default CategoryList;
