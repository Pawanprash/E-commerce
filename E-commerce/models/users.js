const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    userName: {
        type: "String",
        required: true,
    },
    email: {
        type: "String",
        required: true,
    },
    gender: {
        type: "String",
        required: true,
    }
})

const Users=mongoose.model("Users", userSchema);

module.exports=Users;