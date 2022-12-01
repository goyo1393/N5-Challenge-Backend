'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
      employee_first_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
      employee_last_name:  {
        type: Sequelize.TEXT,
        allowNull: false
    },
      permission_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'PermissionTypes'
          },
          key: 'id'
        },
        allowNull: false
      },
      permission_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};