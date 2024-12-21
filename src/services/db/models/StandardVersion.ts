import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface StandardVersionAttributes {
    id?: string;
    semantic_version: string;
    changelog: string;
    version_state_id: string;
    standard_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class StandardVersion extends Model<StandardVersionAttributes> implements StandardVersionAttributes {
    public id!: string;
    public semantic_version!: string;
    public changelog!: string;
    public version_state_id!: string;
    public standard_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

StandardVersion.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        semantic_version: {
            type: DataTypes.STRING,
            allowNull: false
        },
        changelog: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        version_state_id: {
            type: DataTypes.UUID,
            references: {
                model: 'VersionStates', 
                key: 'id', 
            },
            allowNull: false
        },
        standard_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Standards', 
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
        modelName: 'StandardVersion',
    }
);



export default StandardVersion;