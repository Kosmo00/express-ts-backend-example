import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ProjectEnvVariableAttributes {
    id?: string;
    name: string;
    value: string;
    required_in_dependent: boolean;
    project_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class ProjectEnvVariable extends Model<ProjectEnvVariableAttributes> implements ProjectEnvVariableAttributes {
    public id!: string;
    public name!: string;
    public value!: string;
    public required_in_dependent!: boolean;
    public project_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

ProjectEnvVariable.init(
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
        project_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Projects', 
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
        modelName: 'ProjectEnvVariable',
    }
);



export default ProjectEnvVariable;