'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Themes', [{
       title: 'theme1',
       cover: 'https://st.depositphotos.com/1431107/2252/v/450/depositphotos_22523433-stock-illustration-thinking-symbol.jpg',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        title: 'theme2',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VsE4coZPnZyS7zq90GkiYEVThq9yMCd2nkPRqvazCA&s',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        title: 'theme3',
        cover: 'https://media.proglib.io/wp-uploads/2018/01/45675477bb165f999.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
       }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Themes', null, {});
  }
};