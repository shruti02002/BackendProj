const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone_number } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, phone_number });
    await user.save();

    res.json({ success: true, message: 'Signed up successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ success: false, message: 'An error occurred while signing up.' });
  }
};
