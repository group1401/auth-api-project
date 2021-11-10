"use strict";
require("dotenv").config();


const {Sequelize,DataTypes}=require('sequelize')
const userModel = require('./users.js');
const jobsModel = require('./jobModel');
const profileModel = require('./profileModel')
const Data = require("./data-collection");

const DATABASE_URL = "postgres://localhost:5432/hanin";
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';


let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);



const job = jobsModel(sequelize, DataTypes);
const profile = profileModel(sequelize, DataTypes);
// const jobsModel = new dataCollection(Jobs);
// const profileModel = new dataCollection(Profile);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  job: new Data(job),
  profile: new Data(profile),
  sequelize: sequelize,
  DataTypes: DataTypes,
};








