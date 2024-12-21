import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ServiceStandardVersionSupportAttributes {
    id?: string;
    service_id: string;
    standard_version_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class ServiceStandardVersionSupport extends Model<ServiceStandardVersionSupportAttributes> implements ServiceStandardVersionSupportAttributes {
    public id!: string;
    public service_id!: string;
    public standard_version_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

ServiceStandardVersionSupport.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
        standard_version_id: {
            type: DataTypes.UUID,
            references: {
                model: 'StandardVersions', 
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
        modelName: 'ServiceStandardVersionSupport',
    }
);



export default ServiceStandardVersionSupport;