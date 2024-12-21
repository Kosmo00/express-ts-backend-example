import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
        await queryInterface.createTable('DefaultServiceTypeEnvVariables', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.STRING,
            allowNull: false
        },
        required_in_dependent: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        service_type_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'ServiceTypes', 
                    key: 'id', 
                },
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
        });
    },
    async down(queryInterface:QueryInterface, Sequelize:any) {
        await queryInterface.dropTable('DefaultServiceTypeEnvVariables');
    }
};