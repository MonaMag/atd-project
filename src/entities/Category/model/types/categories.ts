export interface Subcategory {
    key: string;
    title: string;
    children?: Subcategory[];
}

export interface CategorySchema {
    id: number;
    code: string;
    title: string;
    items: Subcategory[];
}
