const User = require('../models/user');

exports.editPhoneNumber = async (req, res) => {
  try {
    const { phone_number } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { phone_number }, { new: true });

    res.json({ success: true, message: 'Phone number changed/added successfully', user });
  } catch (error) {
    console.error('Error editing phone number:', error);
    res.status(500).json({ success: false, message: 'An error occurred while editing phone number.' });
  }
};
