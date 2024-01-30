'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Pertama Milik UserID 1',
      caption: 'Ini foto pertama milik UserID 1',
      image_url: 'https://photopertama.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Kedua Milik UserID 1',
      caption: 'Ini foto kedua milik UserID 1',
      image_url: 'https://photokedua.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Ketiga Milik UserID 1',
      caption: 'Ini foto ketiga milik UserID 1',
      image_url: 'https://photoketiga.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
