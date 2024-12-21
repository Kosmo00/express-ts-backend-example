import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
        await queryInterface.createTable('ServiceStandardVersionSupports', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        service_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'Services', 
                    key: 'id', 
                },
            allowNull: false
        },
        standard_version_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'StandardVersions', 
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
        await queryInterface.dropTable('ServiceStandardVersionSupports');
    }
};