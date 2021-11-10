'use strict';

// const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
//   name: { type: DataTypes.STRING, required: true },
//   calories: { type: DataTypes.NUMBER, required: true },
//   type: { type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), required: true }
// });

// module.exports = foodModel;

const job = (sequelize, DataTypes) => 
  sequelize.define("jobs", {
    Title: { type: DataTypes.STRING, allowNull: false },
    Description: { type: DataTypes.STRING, allowNull: false },
    Salary: { type: DataTypes.STRING, allowNull: false },
    StartDate: { type: DataTypes.STRING, allowNull: false },
    EndDate: { type: DataTypes.STRING, allowNull: false },
    Requirements: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = job;
