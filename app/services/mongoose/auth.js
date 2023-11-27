const Users = require('../../api/v1/users/model');
const { BadRequestError, UnauthorizedError } = require('../../errors/index');

const signin = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = Users.findOne({ email: email });

  if (!result) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const isPasswordCorrect = await result.comparePassword(password)
};
