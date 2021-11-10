"use strict";

const express = require("express");

const dataModules = require('../models');

const jobsRouter = express.Router();

jobsRouter.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});
jobsRouter.get("/:jobs", getJobs);
jobsRouter.get("/:jobs/:id", getOneJobs);
jobsRouter.post("/:jobs", createJob);
jobsRouter.put("/:jobs/:id", updateJob);
jobsRouter.delete("/:jobs/:id", deleteJob);

async function getJobs(req, res) {
  let allJobs = await req.model.get();

  res.status(200).json(allJobs);
}

async function getOneJobs(req, res) {
  const id = parseInt(req.params.id);
  let oneJob = await req.model.get(id);

  res.status(200).json(oneJob);
}

async function createJob(req, res) {
  let obj = req.body;
  let createdOne = await req.model.update(obj);
  res.status(201).json(createdOne);
}
async function updateJob(req, res) {
  const id = parseInt(req.params.id);
  let newobj = req.body;
  let updatedJob = await req.model.put(id,newobj);

  res.status(201).json(updatedJob);
}

async function deleteJob(req, res) {
  const id = parseInt(req.params.id);
  let deleteJob = await req.model.delete(id);
  res.status(204).json(deleteJob);
}

module.exports = jobsRouter 
