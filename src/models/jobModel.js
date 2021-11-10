"use strict";

const Jobs = (sequelize, DataTypes) => {
  sequelize.define("jobs", {
    Title: { type: DataTypes.STRING, allowNull: false },
    Description: { type: DataTypes.STRING, allowNull: false },
    Salary: { type: DataTypes.STRING, allowNull: false },
    StartDate: { type: DataTypes.STRING, allowNull: false },
    EndDate: { type: DataTypes.STRING, allowNull: false },
    Requirements: { type: DataTypes.STRING, allowNull: false },
  });
};

module.exports = Jobs;
