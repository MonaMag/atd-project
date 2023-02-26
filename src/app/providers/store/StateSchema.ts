import { UserSchema } from 'entities/User';
import { CategorySchema } from '../../../entities/Category/model/types/categories';
import { AxiosInstance } from 'axios';
import { AppDispatch } from './store';
import { PlatformSchema } from '../../../entities/Platform/model/types/platforms';
import { LoginSchema } from '../../../feature/authByUsername/model/types/login';

export interface StateSchema {
  user: UserSchema;
  category: CategorySchema;
  platform: PlatformSchema;
  login: LoginSchema;
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
