const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name cannot have less than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter your password"],
        minLength: [8, "password cannot have less than 8 characters"],
        select: false,
    },
    avatar: [{
        pubic_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }],
    role: {
        type: String,
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })

};

userSchema.methods.getJWTToken = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);

};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function(){

    // Generating Token 
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and Adding resetPasswordToken to Userschema 
    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
    this.resetPasswordToken = Date.now + 15 * 60 * 1000;

    return resetToken;


};

module.exports = mongoose.model("User", userSchema)
