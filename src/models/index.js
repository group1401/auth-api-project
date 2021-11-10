"use strict";
require("dotenv").config();

const users = require("./users");
const jobs = require("./jobs/model");
const profile = require("./profile/model");
const dataCollection = require("./data-collection");

const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;
console.log(DATABASE_URL);
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

const Users = users(sequelize, DataTypes);
const Jobs = jobs(sequelize, DataTypes);
const Profile = profile(sequelize, DataTypes);

const jobsModel = new dataCollection(Jobs);
const profileModel = new dataCollection(Profile);

module.exports = {
  db: sequelize,
  users: Users,
  jobsModel: jobsModel,
  profileModel: profileModel,
  sequelize: sequelize,
  DataTypes: DataTypes,
};
