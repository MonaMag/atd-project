import { StateSchema } from '../../../../app/providers/store/StateSchema';

export const getUsername = (state: StateSchema) => state;
export const getUserGroup = (state: StateSchema) => state;
export const getUserPhone = (state: StateSchema) => state;
export const getUserEmail = (state: StateSchema) => state;
export const getUserStatus = (state: StateSchema) => state;
export const getUserCompany = (state: StateSchema) => state;
export const getUserInn = (state: StateSchema) => state;
export const getUserData = (state: StateSchema) => state.user.authData;
export const getUserLoading = (state: StateSchema) => state;
