'use strict';

const { EpsSchema, EPS_TABLE } = require('../models/eps.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(EPS_TABLE, EpsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(EPS_TABLE);
  }
};
