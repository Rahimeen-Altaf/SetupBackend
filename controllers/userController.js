const userModel = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await userModel.createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};
