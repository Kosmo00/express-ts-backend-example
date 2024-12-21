import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ProjectAttributes {
    id?: string;
    name: string;
    description: string;
    repo_url: string;
    project_type_id: string;
    language_id: string;
    framework_id: string;
    architecture_id: string;
    standard_version_id: string;
    solution_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Project extends Model<ProjectAttributes> implements ProjectAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public repo_url!: string;
    public project_type_id!: string;
    public language_id!: string;
    public framework_id!: string;
    public architecture_id!: string;
    public standard_version_id!: string;
    public solution_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Project.init(
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
        repo_url: {
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
        language_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Languages', 
                key: 'id', 
            },
            allowNull: false
        },
        framework_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Frameworks', 
                key: 'id', 
            },
            allowNull: false
        },
        architecture_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Architectures', 
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
        modelName: 'Project',
    }
);



export default Project;