export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zipCode: string;
    dateOfBirth: string;
    registrationDate: string;
    isRegistered: boolean;
    votingPreference?: 'in-person' | 'mail-in' | 'early' | 'not-specified';
    politicalAffiliation?: 'democrat' | 'republican' | 'independent' | 'other' | 'not-specified';
}

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zipCode: string;
    dateOfBirth: string;
    votingPreference?: 'in-person' | 'mail-in' | 'early' | 'not-specified';
    politicalAffiliation?: 'democrat' | 'republican' | 'independent' | 'other' | 'not-specified';
}

export interface UpdateUserRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    dateOfBirth?: string;
    votingPreference?: 'in-person' | 'mail-in' | 'early' | 'not-specified';
    politicalAffiliation?: 'democrat' | 'republican' | 'independent' | 'other' | 'not-specified';
}

export interface UserResponse {
    success: boolean;
    data?: User;
    message?: string;
}

export interface UsersResponse {
    success: boolean;
    data?: User[];
    total?: number;
    message?: string;
}

export interface UserQueryParams {
    city?: string;
    state?: string;
    zipCode?: string;
    isRegistered?: boolean;
    votingPreference?: string;
    politicalAffiliation?: string;
    limit?: number;
    offset?: number;
}
