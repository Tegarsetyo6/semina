const Users = require('../../api/v1/users/model');
const Organizers = require('../../api/v1/');

const { BadRequestError } = require('../../errors');

const createOrganizer = async (req) => {
  const { organizer, email, password, confirmPassword, name, role } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Confirm Password tidak sama');
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    email,
    name,
    password,
    organizer: result.id,
    role,
  });

  delete users._doc.password;

  return users;
};

const createUser = async (req) => {
  const { organizer, email, password, confirmPassword, name, role } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan ConfirmPassword tidak sama');
  }

  const result = await Users.create({
    email,
    name,
    password,
    organizer: req.user.organizer,
    role,
  });
  return result;
};

const getAllUsers = async (req) => {
  const result = await Users.find();

  return result;
};

module.exports = { createOrganizer, createUser, getAllUsers };
