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

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
