import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { categoryReducer } from '../../../entities/Category/model/slice/categorySlice';
import { platformReducer } from '../../../entities/Platform/model/slice/platformSlice';
import { loginReducer } from '../../../feature/authByUsername/model/slice/loginSlice';

export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    platform: platformReducer,
    login: loginReducer,
  },
  devTools: process.env.NODE_ENV === 'development', //disable redux dev tools in PROD
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
