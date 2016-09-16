'use strict';
module.exports = function(sequelize, DataTypes) {
  var linkTable = sequelize.define('linkTable', {
    URL: DataTypes.STRING,
    hashIds: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return linkTable;
};
