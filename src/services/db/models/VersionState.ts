import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface VersionStateAttributes {
    id?: string;
    name: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class VersionState extends Model<VersionStateAttributes> implements VersionStateAttributes {
    public id!: string;
    public name!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

VersionState.init(
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
        modelName: 'VersionState',
    }
);



export default VersionState;