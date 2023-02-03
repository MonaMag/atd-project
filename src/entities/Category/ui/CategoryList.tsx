import React, { ChangeEvent, useState } from 'react';
import { Collapse, ConfigProvider, Input, Tree } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Subcategory } from '../model/types/categories';
import { getFilteredTreeData } from '../../../shared/helper/getFilteredTreeData';
import cls from './CategoryList.module.css';

interface CategoryListProps {
    className?: string;
    category: Subcategory;
    firstExpandedKeys: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({
    category,
    firstExpandedKeys,
}) => {
    const [expandedKeys, setExpandedKeys] =
        useState<React.Key[]>(firstExpandedKeys);
    const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    const [searchValue, setSearchValue] = useState('');

    const onExpand = (expandedKeys: React.Key[]) => {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent((prev) => !prev);
    };
    const onCheck = (checkedKeysValue: any) => {
        setCheckedKeys(checkedKeysValue);
    };
    const onSelect = (selectedKeysValue: React.Key[]) => {
        setSelectedKeys(selectedKeysValue);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const filteredData =
        category.children &&
        getFilteredTreeData(category.children, searchValue);

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
                        key={category.key}
                        header={
                            <div className={cls.collapseHeader}>
                                {category.title + ':'}
                            </div>
                        }
                        className={cls.collapsePanel}
                    >
                        <div className={cls.panelContent}>
                            <div className={cls.contentWrapper}>
                                <div className={cls.contentTab}>Tab</div>
                                <div className={cls.content}>
                                    <div className={cls.searchWrapper}>
                                        <Input
                                            allowClear
                                            className={cls.search}
                                            placeholder="Search"
                                            prefix={<SearchOutlined />}
                                            value={searchValue}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className={cls.category}>
                                        {
                                            <Tree
                                                checkable
                                                onExpand={onExpand}
                                                expandedKeys={expandedKeys}
                                                autoExpandParent={
                                                    autoExpandParent
                                                }
                                                onCheck={onCheck}
                                                checkedKeys={checkedKeys}
                                                onSelect={onSelect}
                                                selectedKeys={selectedKeys}
                                                switcherIcon={<DownOutlined />}
                                                treeData={filteredData}
                                            />
                                        }
                                    </div>
                                </div>
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
