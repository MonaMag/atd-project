import { Subcategory } from '../../entities/Category/model/types/categories';

export const getFilteredTreeData = (
    dataSource: Subcategory[],
    searchValue: string,
) => {
    if (!dataSource?.length) {
        return;
    }
    if (!searchValue) {
        return dataSource;
    }

    const result = dataSource
        .map((item) => {
            if (item.title.toLowerCase().includes(searchValue)) return item;
            const filteredChildren = getFilteredTreeData(
                item.children || [],
                searchValue,
            );
            if (filteredChildren && filteredChildren.length)
                return { ...item, children: filteredChildren };
            return undefined;
        })
        .filter(Boolean) as Subcategory[];

    return result;
};
