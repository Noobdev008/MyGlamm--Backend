const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category : String,
    subtitle :String,
    price : Number,
    rating : Number,
    displayimg : String,
    img1 : String,
    img2 : String,
    img3 : String,
    img4 : String,
    id : Number
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("products",  productSchema);