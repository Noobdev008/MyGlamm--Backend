const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("mongodb+srv://prajwal:prajwalrathod@cluster0.qparh.mongodb.net/myglamm");
};

module.exports = connect;