const axios = require('axios');
const parseUsers = require('../services/parseUsers');
require('dotenv').config();

const URL = process.env.URL_USERS;

// Users Controller
async function getUsers(req, res) {
  try {
    const users = await axios.get(URL + '?page=1&limit=15');
    const response = await parseUsers(users.data);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
}

// User Controller
async function getUserById(req, res) {
  try {
    const user = await axios.get(URL + `/${req.userId}`);
  
    res.send(user.data);
  } catch (error) {
    res.status(400).send(error);
  }
}

// User Addresses Controller
async function getUserAddressesByUserId(req, res) {
  try {
    const user = await axios.get(URL + `/${req.userId}/address`);
  
    res.send(user.data);
  } catch (error) {
    res.status(400).send(error);
  }
}

// User Contacts Controller
async function getUserContactsByUserId(req, res) {
  try {
    const user = await axios.get(URL + `/${req.userId}/contacts`);
  
    res.send(user.data);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserAddressesByUserId,
  getUserContactsByUserId
};
