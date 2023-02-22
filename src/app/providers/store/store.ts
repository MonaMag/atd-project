import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { categoryReducer } from '../../../entities/Category/model/slice/categorySlice';
import { addPlatformReducer } from '../../../feature/AddPlatformModal/model/slice/addPlatformSlice';

export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    addPlatform: addPlatformReducer,
  },
  devTools: process.env.NODE_ENV === 'development', //disable redux dev tools in PROD
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActionsType
>;

export type AppActionsType = CategoryActionsType | AddUserActionsType;*/
