import { UserSchema } from 'entities/User';
import { CategorySchema } from '../../../entities/Category/model/types/categories';
import { AxiosInstance } from 'axios';
import { AppDispatch } from './store';

export interface StateSchema {
    user: UserSchema;
    category: CategorySchema;
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
