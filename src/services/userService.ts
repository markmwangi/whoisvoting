import { nanoid } from 'nanoid';
import { User, CreateUserRequest, UpdateUserRequest, UserQueryParams } from '../types/Users';

// TODO: Replace with actual DB
class UserService {
    private users: User[] = [];

    async createUser(userData: CreateUserRequest): Promise<User> {
        const newUser: User = {
            id: nanoid(),
            ...userData,
            registrationDate: new Date().toISOString(),
            isRegistered: true,
            votingPreference: userData.votingPreference || 'not-specified',
            politicalAffiliation: userData.politicalAffiliation || 'not-specified'
        };

        this.users.push(newUser);
        return newUser;
    }

    async getUsers(queryParams: UserQueryParams = {}): Promise<User[]> {
        let filteredUsers = [...this.users];

        if (queryParams.city) {
            filteredUsers = filteredUsers.filter(user =>
                user.city.toLowerCase().includes(queryParams.city!.toLowerCase())
            );
        }

        if (queryParams.state) {
            filteredUsers = filteredUsers.filter(user =>
                user.state.toLowerCase().includes(queryParams.state!.toLowerCase())
            );
        }

        if (queryParams.zipCode) {
            filteredUsers = filteredUsers.filter(user =>
                user.zipCode === queryParams.zipCode
            );
        }

        if (queryParams.isRegistered !== undefined) {
            filteredUsers = filteredUsers.filter(user =>
                user.isRegistered === queryParams.isRegistered
            );
        }

        if (queryParams.votingPreference) {
            filteredUsers = filteredUsers.filter(user =>
                user.votingPreference === queryParams.votingPreference
            );
        }

        if (queryParams.politicalAffiliation) {
            filteredUsers = filteredUsers.filter(user =>
                user.politicalAffiliation === queryParams.politicalAffiliation
            );
        }

        const offset = queryParams.offset || 0;
        const limit = queryParams.limit || filteredUsers.length;

        return filteredUsers.slice(offset, offset + limit);
    }

    async getUserById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async updateUser(id: string, updateData: UpdateUserRequest): Promise<User | null> {
        const userIndex = this.users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return null;
        }

        this.users[userIndex] = {
            ...this.users[userIndex],
            ...updateData
        };

        return this.users[userIndex];
    }

    async deleteUser(id: string): Promise<boolean> {
        const userIndex = this.users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return false;
        }

        this.users.splice(userIndex, 1);
        return true;
    }

    async getUsersByCity(city: string): Promise<User[]> {
        return this.users.filter(user =>
            user.city.toLowerCase().includes(city.toLowerCase())
        );
    }

    async getUsersByState(state: string): Promise<User[]> {
        return this.users.filter(user =>
            user.state.toLowerCase().includes(state.toLowerCase())
        );
    }

    async getUsersByZipCode(zipCode: string): Promise<User[]> {
        return this.users.filter(user => user.zipCode === zipCode);
    }

    async getRegistrationStats(): Promise<{
        total: number;
        registered: number;
        unregistered: number;
        byCity: Record<string, number>;
        byState: Record<string, number>;
    }> {
        const total = this.users.length;
        const registered = this.users.filter(user => user.isRegistered).length;
        const unregistered = total - registered;

        const byCity: Record<string, number> = {};
        const byState: Record<string, number> = {};

        this.users.forEach(user => {
            byCity[user.city] = (byCity[user.city] || 0) + 1;
            byState[user.state] = (byState[user.state] || 0) + 1;
        });

        return {
            total,
            registered,
            unregistered,
            byCity,
            byState
        };
    }
}

export default new UserService();
