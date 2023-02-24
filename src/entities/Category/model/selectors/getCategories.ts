import { StateSchema } from '../../../../app/providers/store/StateSchema';

export const getCategoryData = (state: StateSchema) => state.category.data;
export const getCategoryError = (state: StateSchema) => state.category.error;
export const getCategoryIsLoading = (state: StateSchema) => state.category.isLoading;
