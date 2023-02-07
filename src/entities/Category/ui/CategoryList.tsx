import React, { ChangeEvent, Key, useState } from 'react';
import {
    Collapse,
    ConfigProvider,
    Input,
    Radio,
    RadioChangeEvent,
    Tree,
} from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { CategorySchema } from '../model/types/categories';
import { getFilteredTreeData } from '../../../shared/helper/getFilteredTreeData';
import cls from './CategoryList.module.css';
import { prepareTreeData } from '../../../shared/helper/prepareTreeData';

interface CategoryListProps {
    className?: string;
    category: CategorySchema;
    firstExpandedKeys: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({
    category,
    firstExpandedKeys,
}) => {
    const [expandedKeys, setExpandedKeys] =
        useState<React.Key[]>(firstExpandedKeys);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>('');
    const [value, setValue] = React.useState('include');
    const [includeCheckedKey, setIncludeCheckedKey] = useState<Key[]>([]);
    const [excludeCheckedKey, setExcludeCheckedKey] = useState<Key[]>([]);

    const onExpand = (expandedKeys: React.Key[]) => {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent((prev) => !prev);
    };

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };
    const onChangeTab = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const onCheckInclude = (checkedKeys: any) => {
        setIncludeCheckedKey(checkedKeys);
    };

    const onCheckExclude = (checkedKeys: any) => {
        setExcludeCheckedKey(checkedKeys);
    };

    const filteredData =
        category.items && getFilteredTreeData(category.items, searchValue);

    function renderContent(tab: string) {
        switch (tab) {
            case 'include':
                return category.displayType === 'tree' ? (
                    <Tree
                        checkable
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        onCheck={onCheckInclude}
                        checkedKeys={includeCheckedKey}
                        switcherIcon={<DownOutlined />}
                        treeData={prepareTreeData(
                            filteredData!,
                            excludeCheckedKey,
                        )}
                    />
                ) : (
                    <div>Slider</div>
                );
            case 'exclude':
                return (
                    <Tree
                        checkable
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        onCheck={onCheckExclude}
                        checkedKeys={excludeCheckedKey}
                        switcherIcon={<DownOutlined />}
                        treeData={prepareTreeData(
                            filteredData!,
                            includeCheckedKey,
                        )}
                    />
                );
        }
    }
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
                                    <div className={cls.content}>
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
                            <div className={cls.choice}>choice</div>
                        </div>
                    </Collapse.Panel>
                </Collapse>
            </ConfigProvider>
        </>
    );
};
export default CategoryList;
