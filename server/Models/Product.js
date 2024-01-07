const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    product_id:{
        type:Number,
        unique:true,
        required:true
    },
    product_name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    deal:{
        type:String,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        default:"Myown"
    },
    material:{
        type:String,
        default:"Solid"
    },
    product_care:{
        type:String,
        default:"not mentioned"
    },
    weight:{
        type:Number,
        default:0
    }
});

const Product=mongoose.model('Product',ProductSchema);
module.exports=Product;