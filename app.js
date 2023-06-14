const express = require('express');
const mongoose = require('mongoose');
const welcomeRoutes = require('./routes/welcomeRoutes');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const editRoutes = require('./routes/editRoutes');
const questionnaireRoutes = require('./routes/questionnaireRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/questionnaire', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api/welcome', welcomeRoutes);
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/edit', editRoutes);
app.use('/api/questionnaire', questionnaireRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
