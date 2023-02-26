import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlatformSchema } from '../types/platforms';
import { fetchPlatforms } from '../services/fetchPlatforms';
import { addPlatforms } from '../../../../feature/addPlatformModal/model/services/addPlatforms';

const initialState: PlatformSchema = {
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

export const PlatformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    addPlatform: (state, action) => {
      state.data.push(action.payload);
    },
    changeComment(state, action: PayloadAction<{ newComment: string; accountId: string }>) {
      const index = state.data.findIndex((p) => p.accountId === action.payload.accountId);
      state.data[index].comment = action.payload.newComment;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPlatforms.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchPlatforms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPlatforms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
    /*.addCase(updatePlatformComment.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updatePlatformComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.comment;
      })
      .addCase(updatePlatformComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });*/
  },
});

export const { actions: platformActions } = PlatformSlice;
export const { reducer: platformReducer } = PlatformSlice;
