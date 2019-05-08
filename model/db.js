const mongoose = require('mongoose');
const dburl =
  'mongodb+srv://admin:admin123@cluster0-0a6d3.mongodb.net/test?retryWrites=true';

const connectDB = async () => {
  try {
    await mongoose.connect(dburl, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
