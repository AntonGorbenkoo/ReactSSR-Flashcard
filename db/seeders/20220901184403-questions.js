'use strict';



module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Questions', [{
       themeId: 1,
       question: 'Q1',
       answer: 'A1',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        themeId: 1,
        question: 'Q2',
        answer: 'A2',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        themeId: 1,
        question: 'Q3',
        answer: 'A3',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        themeId: 2,
        question: 'Q4',
        answer: 'A4',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
         themeId: 2,
         question: 'Q5',
         answer: 'A5',
         createdAt: new Date(),
         updatedAt: new Date(),
        },
        {
         themeId: 2,
         question: 'Q6',
         answer: 'A6',
         createdAt: new Date(),
         updatedAt: new Date(),
        },
        {
          themeId: 3,
          question: 'Q7',
          answer: 'A7',
          createdAt: new Date(),
          updatedAt: new Date(),
         },
         {
           themeId: 3,
           question: 'Q8',
           answer: 'A8',
           createdAt: new Date(),
           updatedAt: new Date(),
          },
          {
           themeId: 3,
           question: 'Q9',
           answer: 'A9',
           createdAt: new Date(),
           updatedAt: new Date(),
          },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Questions', null, {});
  }
};
