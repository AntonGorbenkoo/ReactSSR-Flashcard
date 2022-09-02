const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      Question.Themes = Question.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    themeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id', // по умолчанию 'id', можно не писать
      },
    },
    question: {
      type: DataTypes.TEXT,
    },
    answer: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  Question.init(attributes, {
    sequelize,
    modelName: 'Question',
    tableName: 'Questions',
  });
  return Question;
};
