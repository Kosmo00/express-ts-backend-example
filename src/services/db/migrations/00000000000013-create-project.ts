import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
        await queryInterface.createTable('Projects', {
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
        repo_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        project_type_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'ProjectTypes', 
                    key: 'id', 
                },
            allowNull: false
        },
        language_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'Languages', 
                    key: 'id', 
                },
            allowNull: false
        },
        framework_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'Frameworks', 
                    key: 'id', 
                },
            allowNull: false
        },
        architecture_id: {
            type: Sequelize.UUID,
                references: {
                    model: 'Architectures', 
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
        await queryInterface.dropTable('Projects');
    }
};