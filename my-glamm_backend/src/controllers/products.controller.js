const express = require("express");
const router = express.Router();
const products = require("../models/products.model");
const path = require("path");
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, '../')));
app.use(express.json());

router.get("/", async (req, res) => {
  try {
      const productsData = await products.find().lean().exec();
      //res.status(201).send(productsData);
      res.sendFile(path.join(__dirname,"../../products.html"));
  }
  catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;