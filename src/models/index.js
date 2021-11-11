'use strict';

const userModel = require('./users.js');
const profileModel = require('../models/profileModel');
const jobModel = require('../models/job');
const Collection = require('../models/data-collection');

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);

const job = jobModel(sequelize, DataTypes);
const profile = profileModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  job: new Collection(job),
  profile: new Collection(profile),
}
