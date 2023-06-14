const mongoose = require('mongoose');

const userTestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  answers: {
    type: Object,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const UserTest = mongoose.model('UserTest', userTestSchema);

module.exports = UserTest;
