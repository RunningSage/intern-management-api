const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorMiddleware');
const dotenv = require('dotenv');

dotenv.config(); 


const internRoutes = require('./routes/internRoutes');
const taskRoutes = require('./routes/taskRoutes');
const performanceRoutes = require('./routes/performanceRecordRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();


app.use(cors()); 
app.use(morgan('dev')); 
app.use(express.json()); 


app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/interns', internRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/performance', performanceRoutes);
app.use('/api/v1/feedback', feedbackRoutes); 


app.use(errorHandler);


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); 
  }
};

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
