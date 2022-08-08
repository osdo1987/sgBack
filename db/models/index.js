const { User, UserSchema } = require('./user.model');
const { Role, RoleSchema } = require('./role.model');
const { Eps, EpsSchema } = require('./eps.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema,Role.config(sequelize));
  Eps.init(EpsSchema,Eps.config(sequelize));

}

module.exports = setupModels;
