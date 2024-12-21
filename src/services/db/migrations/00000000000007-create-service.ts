import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
        await queryInterface.createTable('Services', {
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
        description: {
            type: Sequelize.TEXT,
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
        solution_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'Solutions', 
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
        await queryInterface.dropTable('Services');
    }
};