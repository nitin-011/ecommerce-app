const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your product name"],
        trim: true
    },
    discription: {
        type: String,
        required: [true, "Please enter product discription"]
    },
    price: {
        type: String,
        required: [true, "Please enter product price"],
        maxlength: [8, "Price cannot exceed 8 characters"],
    },
    rating: {
        type: Number,
        default: 8
    },
    image: [{
        pubic_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }],
    category: {
        type: String,
        required: [true, "please enter product category"]
    },
    Stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxlength: [4, "stock cannot exeed 4 characters"],
        default: 1
    },
    numberofReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }

    }],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Product", productSchema)