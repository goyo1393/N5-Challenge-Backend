const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Model = Sequelize.Model;
const permissionType = require('./permissionTypes.model');

class Permission extends Model { }
Permission.init({
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
      allowNull: false
    },
    permission_date: {
      type: Sequelize.TEXT,
      allowNull: false
  }
}, {
  sequelize,
  schema: process.env.SCHEMADB,
  modelName: 'Permissions',
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

Permission.belongsTo(permissionType);

module.exports = Permission;
    