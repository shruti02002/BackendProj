const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Get the auth token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, 'secret');

    // Attach the user ID to the request object
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
