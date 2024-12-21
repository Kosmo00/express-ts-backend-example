import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface StandardAttributes {
    id?: string;
    name: string;
    description: string;
    architecture_id: string;
    framework_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Standard extends Model<StandardAttributes> implements StandardAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public architecture_id!: string;
    public framework_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Standard.init(
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
        architecture_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Architectures', 
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
        modelName: 'Standard',
    }
);



export default Standard;