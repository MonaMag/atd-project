import React, { Key, memo, useState } from 'react';
import cls from './TreeComponent.module.css';
import { classNames } from '../../../../shared/classNames/classNames';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Subcategory } from '../../model/types/categories';

interface TreeProps {
    className?: string;
    firstExpandedKeys: Key[];
    checkedKeys: any;
    onCheck: (checkedKeys: any) => void;
    treeData: Subcategory[];
}

export const TreeComponent = memo((props: TreeProps) => {
    const { className, firstExpandedKeys, checkedKeys, onCheck, treeData } =
        props;
    const [expandedKeys, setExpandedKeys] =
        useState<React.Key[]>(firstExpandedKeys);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    const onExpand = (expandedKeys: React.Key[]) => {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent((prev) => !prev);
        console.log('expandedKeys: ', expandedKeys);
    };

    return (
        <div className={classNames(cls.treeWrapper, {}, [className])}>
            <Tree
                checkable
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                switcherIcon={<DownOutlined />}
                autoExpandParent={autoExpandParent}
                onCheck={onCheck}
                checkedKeys={checkedKeys}
                treeData={treeData}
            />
        </div>
    );
});
