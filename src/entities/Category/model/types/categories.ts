export type DisplayType = 'tree' | 'slider';

export type DisplayParams = {
    enableExclude: boolean;
    enableSearch: boolean;
};

export interface Subcategory {
    key: string;
    title: string;
    children?: Subcategory[];
}

export interface CategorySchema {
    id: number;
    code: string;
    title: string;
    displayType: DisplayType;
    displayParams: DisplayParams;
    items: Subcategory[];
}
