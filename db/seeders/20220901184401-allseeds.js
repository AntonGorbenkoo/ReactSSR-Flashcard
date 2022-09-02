'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Themes', [{
       title: 'Япония',
       cover: 'https://images.wallpaperscraft.ru/image/single/yaponiya_most_derevya_krasnyy_gory_arhitektura_60740_1920x1080.jpg',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        title: 'США',
        cover: 'https://images.wallpaperscraft.ru/image/single/statuya_svobody_ssha_nyu-york_59564_1920x1080.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        title: 'Китай',
        cover: 'https://storge.pic2.me/cm/1920x1080/486/5f9579fec96252.27734403.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
       }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Themes', null, {});
  }
};