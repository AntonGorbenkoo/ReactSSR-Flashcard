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
        cover: 'https://img.desktopwallpapers.ru/world/pics/wide/1920x1080/7ab7089ae05eadd962cc5231042dc39a.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
       }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Themes', null, {});
  }
};