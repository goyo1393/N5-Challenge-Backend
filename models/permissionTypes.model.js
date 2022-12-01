const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Model = Sequelize.Model;
//const Permission = require('./permission.model');

class PermissionTypes extends Model { }
PermissionTypes.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
  }
}, {
  sequelize,
  schema: process.env.SCHEMADB,
  modelName: 'PermissionTypes',
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

// PermissionTypes.hasMany(Permission);

module.exports = PermissionTypes;
    