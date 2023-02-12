import React, { ChangeEvent, Key, useState } from 'react';
import {
    Collapse,
    ConfigProvider,
    Input,
    Radio,
    RadioChangeEvent,
    Slider,
    Space,
    Tag,
    Typography,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CategorySchema } from '../model/types/categories';
import { getFilteredTreeData } from '../../../shared/helper/getFilteredTreeData';
import cls from './CategoryList.module.css';
import { prepareTreeData } from '../../../shared/helper/prepareTreeData';
import { TreeContainer } from '../../../shared/ui/Tree/Tree';

interface CategoryListProps {
    className?: string;
    category: CategorySchema;
    firstExpandedKeys: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({
    category,
    firstExpandedKeys,
}) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [value, setValue] = React.useState('include');
    const [includeCheckedKey, setIncludeCheckedKey] = useState<Key[]>([]);
    const [excludeCheckedKey, setExcludeCheckedKey] = useState<Key[]>([]);
    const [sliderValues, setSliderValues] = useState<number[]>([18, 50]);

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const onChangeTab = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        console.log('onChangeTab: ', e.target.value);
    };

    const onCheckInclude = (checkedKeys: any) => {
        setIncludeCheckedKey(checkedKeys);
        console.log('includeCheckedKey: ', checkedKeys);
    };

    const onCheckExclude = (checkedKeys: any) => {
        setExcludeCheckedKey(checkedKeys);
        console.log('excludeCheckedKey: ', checkedKeys);
    };

    function onChangeSlider(value: number[]) {
        setSliderValues(value);
        console.log('SliderValues: ', value);
    }

    const marks = {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
    };

    const handleOnClose = (e: React.MouseEvent<HTMLElement>) => {
        console.log('Tag closed', e);
    };

    const preventDefault = (e: React.MouseEvent<SVGSVGElement>) => {
        console.log('Clicked! But prevent default.');
    };

    const handleRemove = (key: Key): void => {
        setIncludeCheckedKey(includeCheckedKey.filter((p) => p !== key));
    };
    const filteredData =
        category.items && getFilteredTreeData(category.items, searchValue);

    //const choiceTitle = getChoiceTagTitle(category.items, includeCheckedKey);

    const renderContent = (tab: string) => {
        switch (tab) {
            case 'include':
                return category.displayType === 'tree' ? (
                    <TreeContainer
                        firstExpandedKeys={firstExpandedKeys}
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
                    <div className={cls.sliderWrapper}>
                        <div className={cls.sliderText}>
                            <Typography.Text underline>
                                {sliderValues[0]}
                            </Typography.Text>
                            <strong className={cls.sliderTextDash}>-</strong>
                            <Typography.Text underline>
                                {sliderValues[1]}
                            </Typography.Text>
                        </div>
                        <Slider
                            range={{ draggableTrack: true }}
                            marks={marks}
                            step={1}
                            defaultValue={[18, 50]}
                            max={80}
                            className={cls.slider}
                            onChange={onChangeSlider}
                        />
                    </div>
                );
            case 'exclude':
                return (
                    <TreeContainer
                        firstExpandedKeys={firstExpandedKeys}
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
                                {category.title + ':'}
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
                                        {includeCheckedKey.length > 0 &&
                                            includeCheckedKey.map((key) => {
                                                return (
                                                    <Tag
                                                        key={key}
                                                        closable
                                                        color={'#3fcbff'}
                                                        onClose={(): void =>
                                                            handleRemove(key)
                                                        }
                                                        className={cls.choice}
                                                    >
                                                        Tag {key}
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
