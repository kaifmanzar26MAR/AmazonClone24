const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cors=require('cors');
const cokkieParser=require('cookie-parser');

const User=require('./Models/User')
const Products=require('./Models/Product');
const authenticate=require('./Authentication/Authenticate');
const cookieParser = require('cookie-parser');
const app=express();
const PORT=4000;
const link='mongodb+srv://kaifmanzar321:kaifmanzar321@cluster0.xnmn0kj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Database conected");
}).catch((error)=>{
    console.log("Error occure in database "+error);
});

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send("hi");
})


// username: 'md kaif',
//   phone: '345345',
//   email: 'kaifmanzae@gmai.com',
//   address: 'alskdf asldkfj',
//   password: 'aaaaa'

//user register  connected
app.post('/register',async(req,res)=>{
    console.log("reg");
    try {
        const data=req.body;
        console.log(data);
        const haspassword=await bcrypt.hash(data.password,10);
        data.password=haspassword;
        console.log(data);
        const newUser=new User(data);
        await newUser.save();
        console.log("registerd");
        res.status(201).json({message:"user registerd successfully"});

    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }
})

//user login connected  cookie saving not working
app.post('/login',async(req,res)=>{
    try {
        const data=req.body;
        
        console.log(data);
        const user=await User.findOne({email:data.email});
        console.log(user);
        if(user && (await bcrypt.compare(data.password, user.password))){
            //generate and add token to user data
            const token=await user.generateAuthToken();
            console.log(token);

            //adding cookie with expire data
            res.cookie("flipcookie", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
                sameSite: "None",
                // Add other options as needed
            });
            
            console.log("cokkie added");
            res.json({user});
        }else{
            console.log("error......")
            throw new Error("User not matched");
            
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


//cudnot get the current user
app.post('/curruser',authenticate,async(req,res)=>{
    console.log("user in")
    res.send(req.rootUser);
})

//getting all user for admin
app.post('/getuser',async(req,res)=>{
    try {
        const users=await User.find();
        console.log(users);
        console.log("hi")
        res.json(users);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }
})

//getting current user by username
app.get('/userdata',authenticate,async(req,res)=>{
    try {
        // const userdata=await User.findOne({username:"kaifmanzar@gmail.com"});
        console.log(req.rootUser)
        res.json("hi");
    } catch (error) {
        console.log(error);
    }
})



//PRoduct

//adding product to databse admin  connected
app.post('/addproduct',async (req,res)=>{
    const data=req.body;
    console.log(data);
    try{

        const newProduct=new Products(data);
        await newProduct.save();
        console.log("prodcut saved");
        res.status(201).json({ message: 'Product created successfully' });
    }catch(error){
        console.log(error);
        res.status(500).json({error:"internal server error "});
    }
})

//geting all producs 
app.get('/getproducts',async(req,res)=>{
    try {
        const product=await Products.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }
})

//get product with id 
app.get('/getproduct/:product_id',async(req,res)=>{
    try {
        const product_id=req.params.product_id;
        const productid = product_id.slice(1);
        console.log(productid);
        const product=await Products.findOne({product_id:productid});
        res.json(product);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }
})

//deleting the product for the admin
app.get('/deleteproduct/:product_id', async (req, res) => {
    try {
        const productid = req.params.product_id;
        const productId = productid.slice(1);
        console.log(productId)
        // Check if the product exists
        const isexist=await Products.findOne({product_id:productId});
        console.log(isexist)
        if(!isexist){
            throw new Error("product not found");
        }
        await Products.findOneAndDelete({product_id:productId});
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'+error});
    }
});

//updating the product for the admin
app.get('/updatproduct/:product_id', async (req, res) => {
    try {
        // const {product_id,product_name,price}=req.body
        const productid = req.params.product_id;
        const productId = productid.slice(1);
        const newprice = 300000;
        
        console.log(productId)
        // Check if the product exists
        const isexist=await Products.findOne({product_id:productId});
        console.log(isexist)
        if(!isexist){
            throw new Error("product not found");
        }
        await Products.findOneAndUpdate({product_id:productId},{$set:{price:newprice}},{new:true});

        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'+error});
    }
});


//adding product to cart and also updating it
app.get('/addtocart',async(req,res)=>{

    try {
        const user=await User.findOne({email:"kaifmanzae@gmai.com"}); //getting current user
        console.log(user);
        const productdata={product_id:11122,product_name:"hi new product 1",price:3454,quantity:2};
        const ispresent= user.cart.find((e)=>{ return e.product_id===productdata.product_id});

        if(ispresent){
            user.cart.find((e)=>{
                 if(e.product_id===productdata.product_id){
                    e.price=productdata.price;
                    e.product_name=productdata.product_name,
                    e.quantity=productdata.quantity
                    console.log(e)
                    console.log("form in")
                 }
                })
                await user.save();
                console.log("data updated");
        }else{
            user.cart=user.cart.concat(productdata);
            await user.save();
            console.log("data added")
        }
        res.send({message:"saved"})
    } catch (error) {
        console.log(error);
        res.status(500).send({error:error});
    }

    
})


//getting all cart items of a user connected
app.post('/getcartitem',async(req,res)=>{
    try {
        const user=await User.findOne({email:"kaifmanzae@gmai.com"});
        const cartitems= user.cart;
        console.log(cartitems);
        res.send(cartitems);
    } catch (error) {
        console.log(error);
    }
})


//place order
app.get('/placeorder',async(req,res)=>{
    try {
        const user=await User.findOne({username:"kaifmanzar1@gmail.com"});
        const productdata={product_id:11121,product_name:"hi new product 2",price:34,quantity:23,date:JSON.stringify(Date.now())};
        user.orders=user.orders.concat(productdata);
        user.save();
        console.log(user.orders);
        res.send(productdata);
    } catch (error) {
        console.log(error);
    }
})


//geting all orders of a user
app.get('/getorders',async(req,res)=>{
    try {
        const user=await User.findOne({email:"kaifmanzar1@gmail.com"});
        const orders=user.orders
        res.send(orders);
    } catch (error) {
        res.send(error);
    }
})


//removing orders
app.get('/removeorders/id',async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    try {
        const user=await User.findOne({username:"kaifmanzar1@gmail.com"});
        user.orders = user.orders.filter((order) => order._id.toString() !== id);
        user.save();
        res.send("removed")
    } catch (error) {
        console.log(error);
    }   
})
app.listen(PORT,()=>{
    console.log("Server is running on localhost:"+PORT);
})
