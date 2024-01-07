const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    },
    
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    cart:[
        {
            product_id:{
                type:Number,
                unique:true,
                required:true
            },
            product_name:{
                type:String,
                required:true,
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
    ],
    orders:[
        {
            product_id:{
                type:Number,
                unique:true,
                required:true
            },
            product_name:{
                type:String,
                required:true,
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                default:1,
            },
            date:{
                type:String,
                default:Date.now()
            }
        }
    ]
});

//generating and adding token to user data
UserSchema.methods.generateAuthToken=async function(){
    try {
        let token=jwt.sign({_id:this._id},"secratekey");
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        console.log("saveing tokend");
        return token;
    } catch (error) {
        console.log(error);
    }
}
const User=mongoose.model('User',UserSchema);
module.exports=User;