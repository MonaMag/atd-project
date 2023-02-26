import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User } from '../../../../entities/User/model/types/user';
import { userActions } from '../../../../entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<User>(
      'http://192.168.233.153:8080/api/v1/auth/login',
      authData,
    );

    if (response.status !== 200) {
      return rejectWithValue("Can't change comment. Server error.");
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
