import { createAsyncThunk } from '@reduxjs/toolkit';
import { Platform } from '../../../../entities/Platform/model/types/platforms';

export const addPlatforms = createAsyncThunk<Platform[], any, { rejectValue: string }>(
  'platform/addPlatforms',
  async (values, { rejectWithValue }) => {
    const response = await fetch('http://192.168.233.153:8080/api/v1/platforms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    return await response.json();
  },
);
