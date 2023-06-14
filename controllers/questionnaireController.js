const Test = require('../models/test');
const UserTest = require('../models/userTest');

exports.submitTest = async (req, res) => {
  try {
    const { userId, testId, answers } = req.body;

    // Get the test from the database
    const test = await Test.findById(testId);

    // Calculate the score
    let score = 0;
    for (const questionId in answers) {
      const question = test.questions.find(q => q._id.toString() === questionId);
      if (question) {
        const selectedAnswers = answers[questionId];
        const isCorrect = question.answers.every(answer =>
          selectedAnswers.includes(answer._id.toString())
        );
        if (isCorrect) {
          score++;
        }
      }
    }

    // Store user's response and calculate score
    const userTest = new UserTest({ userId, testId, answers, score });
    await userTest.save();

    res.json({ success: true, message: 'Test submitted successfully', userId, testId, score });
  } catch (error) {
    console.error('Error submitting test:', error);
    res.status(500).json({ success: false, message: 'An error occurred while submitting the test.' });
  }
};
