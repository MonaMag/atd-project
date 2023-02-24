import { createAsyncThunk } from '@reduxjs/toolkit';
import { Platform } from '../../../../entities/Platform/model/types/platforms';

const userToken: string =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NTU1NTU1NTU1NSIsImV4cCI6MTY3NzI4MzI5MiwiSWQiOjYsIlJvbGUiOnsiaWQiOjMsIm5hbWUiOiJVc2VyIiwiYXV0aG9yaXR5IjoiVXNlciJ9fQ.p4NqM9JQxdSmeCOwjOU9lECoNMa4Tm-5jHvfvhCslgu3O3RT9Htz7EG5Yre7R3z9mewG-TYD59lsE_dalxWiMw';

export const addPlatforms = createAsyncThunk<Platform[], any, { rejectValue: string }>(
  'platform/addPlatforms',
  async (values, { rejectWithValue }) => {
    const response = await fetch('http://192.168.233.153:8080/api/v1/profile/add_account', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
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
