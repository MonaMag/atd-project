import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddPlatformSchema } from '../types/addPlatform';
import { Platform } from '../../../../entities/Platform/model/types/platforms';
import { addPlatforms } from '../services/addPlatforms';

const initialState: AddPlatformSchema = {
  data: [
    {
      key: '1',
      platform: 'MyTarget',
      accountId: '123456789',
      comment: 'Рабочий ЛК',
      date: '12.02.2023',
    },
    {
      key: '2',
      platform: 'MyTarget2',
      accountId: '123456789',
      comment: 'Рабочий ЛК',
      date: '12.02.2023',
    },
    {
      key: '3',
      platform: 'MyTarget3',
      accountId: '123456789',
      date: '12.02.2023',
      comment: 'Рабочий ЛК',
    },
  ],
  isLoading: false,
  error: '',
};

export const AddPlatformSlice = createSlice({
  name: 'addPlatform',
  initialState,
  reducers: {
    addPlatform: (state: AddPlatformSchema, action: PayloadAction<Platform>) => {
      state.data.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addPlatforms.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(addPlatforms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(addPlatforms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: addPlatformActions } = AddPlatformSlice;
export const { reducer: addPlatformReducer } = AddPlatformSlice;
