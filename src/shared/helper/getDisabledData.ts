import { Subcategory } from '../../entities/Category/model/types/categories';
import { Key } from 'react';

export const getDisabledData = (data: Subcategory[], checkedKeys: Key[]) => {
    if (!checkedKeys) {
        return data;
    }

    const result = data.map((item) => {
        if (checkedKeys.includes(item.key)) {
            return { ...item, disabled: true };
        }

        const filteredChildren = getDisabledData(
            item.children || [],
            checkedKeys,
        );
        if (filteredChildren && filteredChildren.length)
            return { ...item, children: filteredChildren };
        return item;
    }) as Subcategory[];

    return result;
};
