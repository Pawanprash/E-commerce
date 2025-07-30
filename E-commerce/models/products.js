const mongoose=require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/DB")
//   .then(() => console.log("DB connected!"))
//   .catch((err) => console.log("Something went wrong in connecting to DB"));


const productSchema=mongoose.Schema({
    productName: {
        type: "String",
        required: true
    },
    productPrice: {
        type: "Number",
        required: true
    },
    productRating: {
        type: "Number",
        min: 0,
        max: 5,
    },
    productReview: "String"

});

const Product=mongoose.model("Product", productSchema);

module.exports=Product;
