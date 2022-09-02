'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Themes', [{
       title: 'theme1',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        title: 'theme2',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        title: 'theme3',
        createdAt: new Date(),
        updatedAt: new Date(),
       }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Themes', null, {});
  }
};