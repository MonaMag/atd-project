import { Profile } from '../../../../entities/Profile/model/types/profile';

export interface AddUserSchema {
    data: Profile;
    isLoading: boolean;
    error?: string;
}
