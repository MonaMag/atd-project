import { StateSchema } from '../../../../app/providers/store/StateSchema';

export const getLoginUsername = (state: StateSchema) => state.login.username;
export const getLoginPassword = (state: StateSchema) => state.login.password;
export const getLoginError = (state: StateSchema) => state.login.error;
export const getLoginIsLoading = (state: StateSchema) => state.login.isLoading;
