import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { categoryReducer } from '../../../entities/Category/model/slice/categorySlice';

export const store = configureStore<StateSchema>({
    reducer: {
        user: userReducer,
        category: categoryReducer,
    },
    devTools: process.env.NODE_ENV === 'development', //disable redux dev tools in PROD
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
