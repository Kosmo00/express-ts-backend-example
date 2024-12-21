import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
        await queryInterface.createTable('StandardVersions', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        semantic_version: {
            type: Sequelize.STRING,
            allowNull: false
        },
        changelog: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        version_state_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'VersionStates', 
                    key: 'id', 
                },
            allowNull: false
        },
        standard_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'Standards', 
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
        await queryInterface.dropTable('StandardVersions');
    }
};