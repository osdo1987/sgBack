const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLE_TABLE = 'acudiente';

const RoleSchema = {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING
  },
  apellidos: {
    allowNull: false,
    type: DataTypes.STRING
  },
  parentesco: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  emergencia: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  idJugador: {
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.INTEGER
  }
}

class Acudiente extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACUDIENTE_TABLE,
      modelName: 'Acudiente',
      timestamps: false
    }
  }
}


module.exports = { ACUDIENTE_TABLE, AcudienteSchema, Acudiente }
