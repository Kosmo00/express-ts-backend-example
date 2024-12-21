import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface SolutionAttributes {
    id?: string;
    name: string;
    description: string;
    repo: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Solution extends Model<SolutionAttributes> implements SolutionAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public repo!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Solution.init(
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
        repo: {
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
        modelName: 'Solution',
    }
);



export default Solution;