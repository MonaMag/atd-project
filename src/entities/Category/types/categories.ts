export interface Description {
    key: string;
    title: string;
}

export interface Subcategory {
    key: string;
    title: string;
    children?: Description[];
}

export interface CategorySchema {
    key: string;
    title: string;
    children: Subcategory[];
}
