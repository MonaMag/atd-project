import { Subcategory } from '../../entities/Category/model/types/categories';

export const getFlatItems = (items: Subcategory[]): Subcategory[] => {
  const result = [];

  for (const item of items) {
    result.push(item);

    if (item.children) {
      result.push(...getFlatItems(item.children));
    }
  }

  return result;
};
