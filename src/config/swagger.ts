import swaggerJsdoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WhoIsVoting API',
            version: '1.0.0',
            description: 'A REST API for managing voter registration and user data. This application provides endpoints to store, retrieve, and query user information with various filtering options.',
            contact: {
                name: 'WhoIsVoting API Support',
                email: 'support@whoisvoting.com'
            },
            license: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    required: ['firstName', 'lastName', 'email', 'city', 'state', 'zipCode', 'dateOfBirth'],
                    properties: {
                        id: {
                            type: 'string',
                            description: 'Unique identifier for the user',
                            example: '1'
                        },
                        firstName: {
                            type: 'string',
                            description: 'User\'s first name',
                            example: 'John'
                        },
                        lastName: {
                            type: 'string',
                            description: 'User\'s last name',
                            example: 'Doe'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User\'s email address',
                            example: 'john.doe@example.com'
                        },
                        city: {
                            type: 'string',
                            description: 'User\'s city',
                            example: 'New York'
                        },
                        state: {
                            type: 'string',
                            description: 'User\'s state',
                            example: 'NY'
                        },
                        zipCode: {
                            type: 'string',
                            description: 'User\'s zip code',
                            example: '10001'
                        },
                        dateOfBirth: {
                            type: 'string',
                            format: 'date',
                            description: 'User\'s date of birth',
                            example: '1990-01-01'
                        },
                        registrationDate: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when user was registered',
                            example: '2024-01-15T10:30:00Z'
                        },
                        isRegistered: {
                            type: 'boolean',
                            description: 'Whether the user is registered to vote',
                            example: true
                        },
                        votingPreference: {
                            type: 'string',
                            enum: ['in-person', 'mail-in', 'early', 'not-specified'],
                            description: 'User\'s voting preference',
                            example: 'in-person'
                        },
                        politicalAffiliation: {
                            type: 'string',
                            enum: ['democrat', 'republican', 'independent', 'other', 'not-specified'],
                            description: 'User\'s political affiliation',
                            example: 'independent'
                        }
                    }
                },
                CreateUserRequest: {
                    type: 'object',
                    required: ['firstName', 'lastName', 'email', 'city', 'state', 'zipCode', 'dateOfBirth'],
                    properties: {
                        firstName: {
                            type: 'string',
                            description: 'User\'s first name',
                            example: 'John'
                        },
                        lastName: {
                            type: 'string',
                            description: 'User\'s last name',
                            example: 'Doe'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User\'s email address',
                            example: 'john.doe@example.com'
                        },
                        city: {
                            type: 'string',
                            description: 'User\'s city',
                            example: 'New York'
                        },
                        state: {
                            type: 'string',
                            description: 'User\'s state',
                            example: 'NY'
                        },
                        zipCode: {
                            type: 'string',
                            description: 'User\'s zip code',
                            example: '10001'
                        },
                        dateOfBirth: {
                            type: 'string',
                            format: 'date',
                            description: 'User\'s date of birth',
                            example: '1990-01-01'
                        },
                        votingPreference: {
                            type: 'string',
                            enum: ['in-person', 'mail-in', 'early', 'not-specified'],
                            description: 'User\'s voting preference',
                            example: 'in-person'
                        },
                        politicalAffiliation: {
                            type: 'string',
                            enum: ['democrat', 'republican', 'independent', 'other', 'not-specified'],
                            description: 'User\'s political affiliation',
                            example: 'independent'
                        }
                    }
                },
                UpdateUserRequest: {
                    type: 'object',
                    properties: {
                        firstName: {
                            type: 'string',
                            description: 'User\'s first name',
                            example: 'John'
                        },
                        lastName: {
                            type: 'string',
                            description: 'User\'s last name',
                            example: 'Doe'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User\'s email address',
                            example: 'john.doe@example.com'
                        },
                        city: {
                            type: 'string',
                            description: 'User\'s city',
                            example: 'New York'
                        },
                        state: {
                            type: 'string',
                            description: 'User\'s state',
                            example: 'NY'
                        },
                        zipCode: {
                            type: 'string',
                            description: 'User\'s zip code',
                            example: '10001'
                        },
                        dateOfBirth: {
                            type: 'string',
                            format: 'date',
                            description: 'User\'s date of birth',
                            example: '1990-01-01'
                        },
                        votingPreference: {
                            type: 'string',
                            enum: ['in-person', 'mail-in', 'early', 'not-specified'],
                            description: 'User\'s voting preference',
                            example: 'in-person'
                        },
                        politicalAffiliation: {
                            type: 'string',
                            enum: ['democrat', 'republican', 'independent', 'other', 'not-specified'],
                            description: 'User\'s political affiliation',
                            example: 'independent'
                        }
                    }
                },
                UserResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            description: 'Whether the operation was successful',
                            example: true
                        },
                        data: {
                            $ref: '#/components/schemas/User'
                        },
                        message: {
                            type: 'string',
                            description: 'Response message',
                            example: 'User created successfully'
                        }
                    }
                },
                UsersResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            description: 'Whether the operation was successful',
                            example: true
                        },
                        data: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/User'
                            }
                        },
                        total: {
                            type: 'integer',
                            description: 'Total number of users returned',
                            example: 5
                        },
                        message: {
                            type: 'string',
                            description: 'Response message',
                            example: 'Users retrieved successfully'
                        }
                    }
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            description: 'Whether the operation was successful',
                            example: false
                        },
                        error: {
                            type: 'string',
                            description: 'Error type',
                            example: 'Not Found'
                        },
                        message: {
                            type: 'string',
                            description: 'Error message',
                            example: 'User not found'
                        }
                    }
                },
                RegistrationStats: {
                    type: 'object',
                    properties: {
                        total: {
                            type: 'integer',
                            description: 'Total number of users',
                            example: 100
                        },
                        registered: {
                            type: 'integer',
                            description: 'Number of registered users',
                            example: 85
                        },
                        unregistered: {
                            type: 'integer',
                            description: 'Number of unregistered users',
                            example: 15
                        },
                        byCity: {
                            type: 'object',
                            additionalProperties: {
                                type: 'integer'
                            },
                            description: 'User count by city',
                            example: {
                                'New York': 25,
                                'Los Angeles': 20
                            }
                        },
                        byState: {
                            type: 'object',
                            additionalProperties: {
                                type: 'integer'
                            },
                            description: 'User count by state',
                            example: {
                                'NY': 30,
                                'CA': 25
                            }
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};

export const swaggerSpec = swaggerJsdoc(options);
