export interface Subcategory {
    key: string;
    title: string;
    children?: Subcategory[];
}

export interface CategorySchema {
    key: string;
    title: string;
    children: Subcategory[];
}
