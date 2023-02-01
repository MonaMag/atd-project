import { Subcategory } from '../../entities/Category/model/types/categories';

export const getFilteredTreeData: any = (
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
        .map((i) => {
            if (i.title.toLowerCase().includes(searchValue)) return i;
            const filtredChildren = getFilteredTreeData(
                i.children || [],
                searchValue,
            );
            if (filtredChildren?.length)
                return { ...i, children: filtredChildren };
            return;
        })
        .filter(Boolean);

    console.log(result);
    return result;
};
