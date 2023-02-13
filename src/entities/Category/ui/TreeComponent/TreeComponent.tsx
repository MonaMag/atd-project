import React, { memo } from 'react';
import cls from './TreeComponent.module.css';
import { classNames } from '../../../../shared/classNames/classNames';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Subcategory } from '../../model/types/categories';

interface TreeProps {
    className?: string;
    checkedKeys: any;
    onCheck: (checkedKeys: any, e: any) => void;
    treeData: Subcategory[];
}

export const TreeComponent = memo((props: TreeProps) => {
    const { className, checkedKeys, onCheck, treeData } = props;

    return (
        <div className={classNames(cls.treeWrapper, {}, [className])}>
            <Tree
                checkable
                multiple
                defaultExpandAll
                switcherIcon={<DownOutlined />}
                onCheck={onCheck}
                checkedKeys={checkedKeys}
                treeData={treeData}
                selectable={false}
                height={1000}
            />
        </div>
    );
});
