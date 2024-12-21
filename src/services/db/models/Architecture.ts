import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ArchitectureAttributes {
    id?: string;
    name: string;
    project_type_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Architecture extends Model<ArchitectureAttributes> implements ArchitectureAttributes {
    public id!: string;
    public name!: string;
    public project_type_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Architecture.init(
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
        project_type_id: {
            type: DataTypes.UUID,
            references: {
                model: 'ProjectTypes', 
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
        modelName: 'Architecture',
    }
);



export default Architecture;