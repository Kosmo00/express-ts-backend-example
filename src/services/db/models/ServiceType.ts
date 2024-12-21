import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ServiceTypeAttributes {
    id?: string;
    name: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class ServiceType extends Model<ServiceTypeAttributes> implements ServiceTypeAttributes {
    public id!: string;
    public name!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

ServiceType.init(
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
        modelName: 'ServiceType',
    }
);



export default ServiceType;