import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ServiceEnvVariablesAttributes {
    id?: string;
    name: string;
    value: string;
    required_in_dependent: boolean;
    service_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class ServiceEnvVariables extends Model<ServiceEnvVariablesAttributes> implements ServiceEnvVariablesAttributes {
    public id!: string;
    public name!: string;
    public value!: string;
    public required_in_dependent!: boolean;
    public service_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

ServiceEnvVariables.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        },
        required_in_dependent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        service_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Services', 
                key: 'id', 
            },
            allowNull: false
        },

        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        sequelize: connection,
        modelName: 'ServiceEnvVariables',
    }
);



export default ServiceEnvVariables;