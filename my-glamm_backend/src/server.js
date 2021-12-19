const express = require("express");
const { render } = require("express/lib/response");
const connect = require("./configs/db");
const port = 80;
const app = express();

const path = require("path");


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, '../')));
app.use(express.json());

const products = require("./models/products.model");



app.get("/", async (req, res) => {
  try 
  {
    res.sendFile(path.join(__dirname,"../index.html"));
    //return res.send("srng index.html");
  }
  catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


app.get("/srng", async (req, res) => {
  try {
      const productsData = await products.find().lean().exec();
      res.status(201).send(productsData);
      //res.sendFile(path.join(__dirname,"../../products.html")); 
  }
  catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


const productController = require("./controllers/products.controller");
const productContrl = require("./controllers/productdetail.control");
const cartcontroller = require("./controllers/cart.controller");
const checkoutcontroller = require("./controllers/checkout.controller");
const paymentcontroller = require("./controllers/payment.controller");
const successcontroller = require("./controllers/success.controller");



app.use("/products", productController);
app.use("/productsdetail", productContrl);
app.use("/cart", cartcontroller);
app.use("/payment", paymentcontroller);
app.use("/checkout", checkoutcontroller);
app.use("/successful", successcontroller);







const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`listning port ${port} with Srng`);
  });
};



//module.exports = data;
module.exports = start;