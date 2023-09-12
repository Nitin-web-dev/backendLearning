const Task = require("../models/tasksModel");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

// get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// craete task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// get task by id
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`no task with id  ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// delete task by id
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`no task with id ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

// updateTask by id
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate(
    {
      _id: taskID,
    },
    req.body,
    { new: true, runValidators: true }
  );

  if (!task) {
    return next(createCustomError(`no task with id ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
