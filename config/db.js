const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database`
    );
  } catch (error) {
    console.log(`Mongodb Database Error: ${error}`);
  }
};

module.exports = connectDB;

