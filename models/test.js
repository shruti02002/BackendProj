const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answers: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  ]
});

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  questions: [questionSchema]
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
