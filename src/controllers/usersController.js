const axios = require('axios');
require('dotenv').config();

const URL = process.env.URL_USERS;

async function getUsers(req, res) {
  try {
    const users = await axios.get(URL);
  
    res.send(users.data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getUserById(req, res) {
  try {
    const user = await axios.get(URL + `/${req.userId}`);
  
    res.send(user.data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getUserAddressesByUserId(req, res) {
  try {
    const user = await axios.get(URL + `/${req.userId}/address`);
  
    res.send(user.data);
  } catch (error) {
    res.status(400).send(error);
  }
}

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
