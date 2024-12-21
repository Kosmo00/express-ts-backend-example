import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface FrameworkAttributes {
    id?: string;
    name: string;
    language_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Framework extends Model<FrameworkAttributes> implements FrameworkAttributes {
    public id!: string;
    public name!: string;
    public language_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Framework.init(
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
        language_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Languages', 
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
        modelName: 'Framework',
    }
);



export default Framework;