import { UserSchema } from 'entities/User';
import { CategorySchema } from '../../../entities/Category/model/types/categories';
import { AxiosInstance } from 'axios';
import { AppDispatch } from './store';
import { AddPlatformSchema } from '../../../feature/AddPlatformModal/model/types/addPlatform';

export interface StateSchema {
  user: UserSchema;
  category: CategorySchema;
  addPlatform: AddPlatformSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
  dispatch: AppDispatch;
}
