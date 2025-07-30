const Product=require('./models/products');
const express= require('express');
const app= express();
const mongoose=require('mongoose');
const methodOverride=require('method-override');

mongoose
  .connect("mongodb://127.0.0.1:27017/DB")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log("Something went wrong in connecting to DB"));


app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static('public'));





app.listen(5000,()=>{
  console.log("server on")
})

app.get("/",(req,res)=>{
  res.send("Hello")
});

//get list of all products
app.get("/products",(req,res)=>{
async function getProducts() {
  const products= await Product.find({});
  res.render("products",{products})
}
getProducts();
})

//add a product(Get Form)
app.get("/products/new",(req,res)=>{
  res.render("new");
})

//add a product (Post request)
app.post("/products",(req,res)=>{
  const {productName, productPrice, productRating, productReview}=req.body;
  async function createProduct() {
    await Product.create({
      productName,
      productPrice,
      productRating,
      productReview
    })
    res.redirect("products");
  }
  createProduct();
})

//get details of the product
app.get("/products/:id",(req,res)=>{
  const query=req.params.id;
  async function getProduct(query) {
    const product=await Product.findById(query);
    res.render("show",{product});
  }
getProduct(query);
})

//update product details
app.get("/products/:id/edit",(req,res)=>{
  const query=req.params.id;
  async function getProduct(query) {
    const product=await Product.findById(query);
    res.render("edit",{product});
  }
getProduct(query);
})
