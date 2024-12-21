import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface ProjectServiceAttributes {
    id?: string;
    project_id: string;
    service_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class ProjectService extends Model<ProjectServiceAttributes> implements ProjectServiceAttributes {
    public id!: string;
    public project_id!: string;
    public service_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

ProjectService.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
        service_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Services', 
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
        modelName: 'ProjectService',
    }
);



export default ProjectService;