const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const EPS_TABLE = 'datos_eps';

const EpsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  alergias: {
    allowNull: false,
    type: DataTypes.STRING
  },
  medicamento: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  userId:{
    field:'id_usuario',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:USER_TABLE,
      key:'id_usuario'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
  }
}

class Eps extends Model {
  static associate() {
    this.belongsTo(models.User,{as:'user'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EPS_TABLE,
      modelName: 'Eps',
      timestamps: false
    }
  }
}


module.exports = { EPS_TABLE, EpsSchema, Eps }
