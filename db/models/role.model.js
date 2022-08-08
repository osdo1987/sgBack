const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLE_TABLE = 'role';

const RoleSchema = {
  IdRole: {
    field:'id_role',
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}

class Role extends Model {

  static associate(models){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}


module.exports = { ROLE_TABLE, RoleSchema, Role }
