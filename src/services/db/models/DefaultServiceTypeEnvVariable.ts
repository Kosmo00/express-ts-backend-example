import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface DefaultServiceTypeEnvVariableAttributes {
    id?: string;
    name: string;
    value: string;
    required_in_dependent: boolean;
    service_type_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class DefaultServiceTypeEnvVariable extends Model<DefaultServiceTypeEnvVariableAttributes> implements DefaultServiceTypeEnvVariableAttributes {
    public id!: string;
    public name!: string;
    public value!: string;
    public required_in_dependent!: boolean;
    public service_type_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

DefaultServiceTypeEnvVariable.init(
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
        service_type_id: {
            type: DataTypes.UUID,
            references: {
                model: 'ServiceTypes', 
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
        modelName: 'DefaultServiceTypeEnvVariable',
    }
);



export default DefaultServiceTypeEnvVariable;