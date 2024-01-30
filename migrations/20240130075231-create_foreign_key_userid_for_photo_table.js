'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Photos", "UserId", {
      type: Sequelize.INTEGER
    })

    await queryInterface.addConstraint("Photos", {
      fields: ["UserId"],
      type: "foreign key",
      name: "user_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Photos", "user_fk")
    await queryInterface.removeColumn("Photos", "UserId")
  }
};
