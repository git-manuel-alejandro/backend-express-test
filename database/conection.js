const mongoose = require("mongoose");

const conection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mi_blog");
    console.log("conected to db");
  } catch (error) {
    console.log(error);
    throw new Error("Error trying to connect database");
  }
};
module.exports = { conection };
