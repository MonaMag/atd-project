import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/categories';
import { ThunkConfig } from '../../../../app/providers/store/StateSchema';
import { categoryActions } from '../slice/categorySlice';

export const fetchCategory = createAsyncThunk<
    CategorySchema,
    void,
    ThunkConfig<string>
>('category/fetchCategory', async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<CategorySchema>('/categories');

        if (!response.data) {
            throw new Error();
        }
        dispatch(categoryActions.setCategory(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
