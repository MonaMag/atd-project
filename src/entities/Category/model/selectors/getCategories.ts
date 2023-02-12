import { StateSchema } from '../../../../app/providers/store/StateSchema';

export const getCategoryData = (state: StateSchema) => state.category.items;
export const getCategoryTitle = (state: StateSchema) => state.category.title;
export const getCategoryId = (state: StateSchema) => state.category.id;
export const getCategoryDisplayType = (state: StateSchema) =>
    state.category.displayType;
export const getCategoryDisplayParamsSearch = (state: StateSchema) =>
    state.category.displayParams.enableSearch;
export const getCategoryDisplayParamsExclude = (state: StateSchema) =>
    state.category.displayParams.enableExclude;
