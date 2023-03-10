import { CategoryItem } from '../../entities/Category/model/types/categories';
import { Key } from 'react';

export const prepareTreeData = (data: CategoryItem[], checkedKeys: Key[]) => {
  if (!checkedKeys) {
    return data;
  }

  const result = data.map((item) => {
    if (checkedKeys.includes(item.key)) {
      item = { ...item, disabled: true };
    }

    const filteredChildren = prepareTreeData(item.children || [], checkedKeys);
    if (filteredChildren && filteredChildren.length) return { ...item, children: filteredChildren };
    return item;
  }) as CategoryItem[];

  return result;
};
