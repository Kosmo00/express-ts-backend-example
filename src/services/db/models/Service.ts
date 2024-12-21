import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ServiceAttributes {
    id?: string;
    name: string;
    description: string;
    service_type_id: string;
    solution_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Service extends Model<ServiceAttributes> implements ServiceAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public service_type_id!: string;
    public solution_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Service.init(
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
        description: {
            type: DataTypes.TEXT,
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
        solution_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Solutions', 
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
        modelName: 'Service',
    }
);



export default Service;