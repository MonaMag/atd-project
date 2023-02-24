import { CategoryItem } from '../../entities/Category/model/types/categories';

export const getFlatItems = (items: CategoryItem[]): CategoryItem[] => {
  const result = [];

  if (items) {
    for (const item of items) {
      result.push(item);

      if (item.children) {
        result.push(...getFlatItems(item.children));
      }
    }
  }
  return result;
};
