import { UserRole } from '../../../User';

export type profileStatus = 'active' | 'inactive';

export interface Profile {
    username: string;
    group: UserRole;
    phone: string;
    email: string;
    status: profileStatus;
    company?: string;
    inn?: string;
    date?: string;
}

export interface ProfileSchema {
    data: Profile;
    isLoading: boolean;
    error: string;
}
