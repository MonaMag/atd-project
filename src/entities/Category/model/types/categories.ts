export type DisplayType = 'tree' | 'slider';

export type DisplayParams = {
  enableExclude: boolean;
  enableSearch: boolean;
};

export interface CategoryItem {
  key: string;
  title: string;
  disabled?: boolean;
  children?: CategoryItem[];
}

/*interface CategoryItemAge {
  key: string;
  ageFrom: number;
  ageUpTo: number;
}*/

export interface Category {
  id: number;
  code: string;
  title: string;
  displayType: DisplayType;
  displayParams: DisplayParams;
  items: CategoryItem[] | [];
}

export interface CategorySchema {
  data: Category[];
  isLoading: boolean;
  error?: string;
}
