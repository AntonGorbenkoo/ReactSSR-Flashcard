module.exports = {
    async up (queryInterface, Sequelize) {
    
       await queryInterface.bulkInsert('Users', [{
         login: 'Витя',
         score: 0,
         createdAt: new Date(),
         updatedAt: new Date(),
        },
        {
          login: 'Дима',
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
         }], {});
    },
  
    async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('Users', null, {});
    }
  };