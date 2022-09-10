const axios = require('axios');
const parseUsers = require('../services/parseUsers');
require('dotenv').config();

const URL = process.env.URL_USERS;

// Users Controller
async function getUsers(req, res) {
  try {
    const { page, limit, sortBy, order = 'asc' } = req.query
    const users = await axios.get(page && limit ? URL + `?page=${page}&limit=${limit}` : URL);
    const response = await parseUsers(users.data);
    if(sortBy) sortData(response, sortBy, order);
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

// Sort data when query contains sortBy
function sortData(data, sortBy, order) {
  data.sort((a, b) => {
    if(a[sortBy] < b[sortBy]) {
      return order !== 'desc' ? -1 : 1;
    }
    return order !== 'desc' ? 1 : -1;
  });
}

module.exports = {
  getUsers,
  getUserById,
  getUserAddressesByUserId,
  getUserContactsByUserId
};
