'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');
const { RoleSchema, ROLE_TABLE } = require('../models/role.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
  }
};
