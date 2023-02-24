import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/categories';

export const fetchCategory = createAsyncThunk<CategorySchema, undefined, { rejectValue: string }>(
  'category/fetchCategory',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://192.168.233.153:8080/api/v1/util/info');

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();

    return data;
  },
);
