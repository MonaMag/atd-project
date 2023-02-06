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
    const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>('');
    const [includesKey, setIncludesKey] = useState<Key[]>([]);
    const [excludesKey, setExcludesKey] = useState<Key[]>([]);

    const onExpand = (expandedKeys: React.Key[]) => {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent((prev) => !prev);
    };

    const onCheck = (checkedKeys: any) => {
        setCheckedKeys(checkedKeys);
        console.log('CHECKED', checkedKeys);
    };

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const filteredData =
        category.items && getFilteredTreeData(category.items, searchValue);

    const onChangedInclude = () => {
        setExcludesKey(checkedKeys);
    };

    const onChangeExclude = () => {
        setIncludesKey(checkedKeys);
    };

    const [value, setValue] = React.useState('include');
    const onChangeTab = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    function renderContent(tab: string) {
        switch (tab) {
            case 'include':
                return (
                    <Tree
                        checkable
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        onCheck={onCheck}
                        checkedKeys={checkedKeys}
                        switcherIcon={<DownOutlined />}
                        treeData={prepareTreeData(filteredData!, excludesKey)}
                    />
                );
            case 'exclude':
                return (
                    <Tree
                        style={{ color: 'red' }}
                        checkable
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        onCheck={onCheck}
                        checkedKeys={checkedKeys}
                        switcherIcon={<DownOutlined />}
                        treeData={prepareTreeData(filteredData!, includesKey)}
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
                                        onClick={onChangedInclude}
                                    >
                                        Включить
                                    </Radio.Button>
                                    <Radio.Button
                                        value="exclude"
                                        className={cls.tabButton}
                                        onClick={onChangeExclude}
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
