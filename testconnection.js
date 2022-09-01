const db = require('./db/models');

function logSuccess() {
  console.log('Соединение с БД установлено');
}

function logFailure(error) {
  console.log('Не удалось подключиться к БД');
  console.log(error.message);
}

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    logSuccess();
  } catch (error) {
    logFailure(error);
  }
}

module.exports = testConnection;