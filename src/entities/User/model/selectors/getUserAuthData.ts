import {StateSchema} from "../../../../app/providers/store/StateSchema";


export const getUserAuthData = (state: StateSchema) => state.user.authData;
