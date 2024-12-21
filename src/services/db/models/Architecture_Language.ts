import { Model, DataTypes } from 'sequelize';
import connection from './index';

interface Architecture_LanguageAttributes {
    id?: string;
    language_id: string;
    architecture_id: string;

    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

class Architecture_Language extends Model<Architecture_LanguageAttributes> implements Architecture_LanguageAttributes {
    public id!: string;
    public language_id!: string;
    public architecture_id!: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Architecture_Language.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
        architecture_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Architectures', 
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
        modelName: 'Architecture_Language',
    }
);



export default Architecture_Language;