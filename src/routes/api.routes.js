const {
  getUsers,
  getUserById,
  getUserAddressesByUserId,
  getUserContactsByUserId
} = require('../controllers/usersController');
const router = require('express').Router();

// Routes
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users/:id/address', getUserAddressesByUserId);
router.get('/users/:id/contacts', getUserContactsByUserId);

// Identify ID parameter and add to Request as userId
router.param('id', (req, res, next, id) => {
  req.userId = req.params.id;
  next();
})

module.exports = router;
