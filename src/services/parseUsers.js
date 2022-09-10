const axios = require("axios");
const { userKeys, addressKeys, contactKeys } = require("../utils/keys");
require('dotenv').config();
const URL = process.env.URL_USERS;

const parseUsers = async (users) => {
  try {
    const usersWithAddressAndContact = [];
    for (const user of users) {
      user.fullName = `${user.firstName} ${user.lastName}`;

      const filteredUser = filterObject(user, userKeys);
      const { filteredAddresses, filteredContacts } = await treatUser(user.id);

      const data = {
        addresses: filteredAddresses,
        contacts: filteredContacts
      }
      const newValue = Object.assign(filteredUser, data);
      usersWithAddressAndContact.push(newValue);
    }
    return usersWithAddressAndContact
  } catch (error) {
    console.log(error);
  }
}

const treatUser = async (userId) => {
  try {
    const [ address, contact ] = await Promise.allSettled([
      getAddress(userId),
      getContact(userId)
    ]);

    const filteredAddresses = address.status !== 'rejected' ? address.value.data.map(item => {
      item.addressId = item.id;
      item.address = `${item.number} ${item.street}`;
      return filterObject(item, addressKeys);
    }) : [];

    const filteredContacts = contact.status !== 'rejected' ? contact.value.data.map(item => {
      item.contactId = item.id;
      return filterObject(item, contactKeys);
    }) : [];

    return { filteredAddresses, filteredContacts };
  } catch (error) {
    console.log(error)
  }
}

const getAddress = async (userId) => {
  return await axios.get(URL + `/${userId}/address`);
}

const getContact = async (userId) => {
  return await axios.get(URL + `/${userId}/contacts`);
}

function filterObject(object, keys) {
  return Object.keys(object)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: object[key]
      });
    }, {});
}

module.exports = parseUsers;
