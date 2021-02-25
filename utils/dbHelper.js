function registerUser(modal, data) {
  const user = new modal({
    ...data,
  });
  return user.save();
}

function findByEmail(modal, email) {
  return modal.findOne(email).exec();
}

function findOne(modal, query) {
  return modal.findOne(query).exec();
}

function findById(modal, id) {
  return modal.findById(id);
}

function deleteUser(modal, id) {
  return modal.findByIdAndUpdate(id, { isDeleted: true });
}

async function getSingleUser(modal, id) {
  return modal.findById(id);
}

function updateUser(modal, _id, user) {
  return modal.updateOne({ _id }, { ...user });
}

module.exports = {
  registerUser,
  findByEmail,
  findOne,
  findById,
  deleteUser,
  getSingleUser,
  updateUser,
};
