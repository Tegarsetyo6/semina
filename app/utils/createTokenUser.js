const createTokenUser = (user) => {
  return {
    name: user.name,
    user_id: user.id,
    role: user.role,
    email: user.email,
    organizer: user.organizer,
  };
};

module.exports = { createTokenUser };
