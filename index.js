const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const internRoutes = require('./routes/internRoutes');
const performanceRecordRoutes = require('./routes/performanceRecordRoutes');
const taskRoutes = require('./routes/taskRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

app.use(bodyParser.json());

app.use('/api/interns', internRoutes);
app.use('/api/performance-records', performanceRecordRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error(err));
