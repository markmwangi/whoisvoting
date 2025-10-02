import { Request, Response } from 'express';
import userService from '../services/userService';
import { CreateUserRequest, UpdateUserRequest, UserQueryParams } from '../types/Users';

export class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const userData: CreateUserRequest = req.body;

            if (!userData.firstName || !userData.lastName || !userData.email) {
                res.status(400).json({
                    success: false,
                    message: 'First name, last name, and email are required'
                });
                return;
            }

            const newUser = await userService.createUser(userData);

            res.status(201).json({
                success: true,
                data: newUser,
                message: 'User created successfully'
            });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to create user'
            });
        }
    }

    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const queryParams: UserQueryParams = {
                city: req.query.city as string,
                state: req.query.state as string,
                zipCode: req.query.zipCode as string,
                isRegistered: req.query.isRegistered === 'true' ? true : req.query.isRegistered === 'false' ? false : undefined,
                votingPreference: req.query.votingPreference as string,
                politicalAffiliation: req.query.politicalAffiliation as string,
                limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
                offset: req.query.offset ? parseInt(req.query.offset as string) : undefined
            };

            const users = await userService.getUsers(queryParams);

            res.status(200).json({
                success: true,
                data: users,
                total: users.length,
                message: 'Users retrieved successfully'
            });
        } catch (error) {
            console.error('Error getting users:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve users'
            });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);

            if (!user) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: user,
                message: 'User retrieved successfully'
            });
        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve user'
            });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updateData: UpdateUserRequest = req.body;

            const updatedUser = await userService.updateUser(id, updateData);

            if (!updatedUser) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: updatedUser,
                message: 'User updated successfully'
            });
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to update user'
            });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await userService.deleteUser(id);

            if (!deleted) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: 'User deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to delete user'
            });
        }
    }

    async getUsersByCity(req: Request, res: Response): Promise<void> {
        try {
            const { city } = req.params;
            const users = await userService.getUsersByCity(city);

            res.status(200).json({
                success: true,
                data: users,
                total: users.length,
                message: `Found ${users.length} users in ${city}`
            });
        } catch (error) {
            console.error('Error getting users by city:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve users by city'
            });
        }
    }

    async getUsersByState(req: Request, res: Response): Promise<void> {
        try {
            const { state } = req.params;
            const users = await userService.getUsersByState(state);

            res.status(200).json({
                success: true,
                data: users,
                total: users.length,
                message: `Found ${users.length} users in ${state}`
            });
        } catch (error) {
            console.error('Error getting users by state:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve users by state'
            });
        }
    }

    async getUsersByZipCode(req: Request, res: Response): Promise<void> {
        try {
            const { zipCode } = req.params;
            const users = await userService.getUsersByZipCode(zipCode);

            res.status(200).json({
                success: true,
                data: users,
                total: users.length,
                message: `Found ${users.length} users in zip code ${zipCode}`
            });
        } catch (error) {
            console.error('Error getting users by zip code:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve users by zip code'
            });
        }
    }

    async getRegistrationStats(req: Request, res: Response): Promise<void> {
        try {
            const stats = await userService.getRegistrationStats();

            res.status(200).json({
                success: true,
                data: stats,
                message: 'Registration statistics retrieved successfully'
            });
        } catch (error) {
            console.error('Error getting registration stats:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve registration statistics'
            });
        }
    }
}

export default new UserController();
