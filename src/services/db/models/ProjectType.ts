import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ProjectTypeAttributes {
    id?: string;
    name: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class ProjectType extends Model<ProjectTypeAttributes> implements ProjectTypeAttributes {
    public id!: string;
    public name!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

ProjectType.init(
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
        modelName: 'ProjectType',
    }
);



export default ProjectType;