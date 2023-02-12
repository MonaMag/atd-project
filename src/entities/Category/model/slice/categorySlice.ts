import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/categories';

const initialState: CategorySchema = {
    id: 1,
    code: '',
    title: '',
    displayType: 'tree',
    displayParams: {
        enableExclude: false,
        enableSearch: false,
    },
    items: [],
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<CategorySchema>) => {
            state = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: categoryActions } = categorySlice;
export const { reducer: categoryReducer } = categorySlice;
