import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../../../entities/Profile/model/types/profile';
import { UserRole } from '../../../../entities/User';

const initialState: ProfileSchema = {
    data: {
        firstname: '',
        lastname: '',
        patronymic: '',
        group: UserRole.USER,
        phone: '',
        email: '',
        status: 'active',
        company: 'ООО Т2Мобайл',
        inn: '',
    },
    isLoading: false,
    error: '',
};

export const addUserSlice = createSlice({
    name: 'addUserForm',
    initialState,
    reducers: {
        setFirstname: (state, action: PayloadAction<string>) => {
            state.data.firstname = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.data.email = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addUserFormActions } = addUserSlice;
export const { reducer: addUserFormReducer } = addUserSlice;
