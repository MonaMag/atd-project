import { createAsyncThunk } from '@reduxjs/toolkit';
import { Platform } from '../types/platforms';

export const fetchPlatforms = createAsyncThunk<Platform[], undefined, { rejectValue: string }>(
  'adPlatform/fetchPlatforms',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://192.168.233.153:8080/api/v1/platforms');

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    return await response.json();
  },
);
