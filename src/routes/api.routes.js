const {
  getUsers,
  getUserById,
  getUserAddressesByUserId,
  getUserContactsByUserId
} = require('../controllers/usersController');

const router = require('express').Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users/:id/address', getUserAddressesByUserId);
router.get('/users/:id/contacts', getUserContactsByUserId);

router.param('id', (req, res, next, id) => {
  req.userId = req.params.id;
  console.log(req.userId)
  next();
})

module.exports = router;
