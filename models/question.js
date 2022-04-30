'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    question_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    question_type_id: DataTypes.INTEGER,
    difficulty_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    question_answer1: DataTypes.STRING,
    question_answer2: DataTypes.STRING,
    question_answer3: DataTypes.STRING,
    question_answer4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};