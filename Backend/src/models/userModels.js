const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/Streamify")
  .then((e) => console.log("Database is connected"))
  .catch((e) => console.error(e));


const userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String
}, { timestamps: true });

const User = mongoose.model("userDetails", userSchema);

module.exports = User;