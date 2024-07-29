const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");
require('dotenv').config()
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

//Database connection with MongoDB
mongoose.connect(process.env.MONGO_URL);

//API 
app.get("/", (req, res) => {
    res.send("Express App is Running");
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({ storage: storage })

//Creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `${process.env.BACKEND_URL}/images/${req.file.filename}`
    })
})

//Schema for creating products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

//API for Adding Products

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Saved")
    res.json({
        success: true,
        name: req.body.name,
    })
})

//API for Deleting Products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    })
})

//Creating API for getting all Products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//Schema for Users
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    cartData: {
        type: Array, 
        default: []
    },
    wishData: {
        type: Array,
        default: []
    },
    userInfo: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

//Creating endpoint for registering user

app.post('/signup', async (req, res) => {

    let check = await Users.findOne({ email: req.body.email });

    if (check) {
        return res.status(400).json({ success: false, errors: "Existing User Found" })
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let cart = [];
    let wishlist = [];
    let userdetails=[];
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        cartData: cart,
        wishData: wishlist,
        userInfo: userdetails,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
})

//Creating endpoint for user login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = await bcrypt.compare(req.body.password, user.password);
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        }
        else {
            res.status(401).send({ success: false, errors: "Wrong Password" });
        }
    }
    else {
        res.status(401).send({ success: false, errors: "Wrong Email Id" });
    }
})

//Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "please authenticate" })
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please autheticate using valid token" })
        }
    }
}

//Creating endpoint to save cartData
app.post('/savecart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    if (!Array.isArray(userData.cartData)) {
        userData.cartData = [userData.cartData];
    }
    userData.cartData = req.body;
    await Users.findOneAndUpdate({_id:req.user.id} , {cartData:userData.cartData});
    res.send("Added");

});

//creating endpoint to get the cart data
app.post('/getcart' , fetchUser , async(req,res)=>{
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
    
});

//Creating endpoint to store userData
app.post('/saveinfo' , fetchUser , async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    userData.userInfo=req.body;
    await Users.findOneAndUpdate({_id:req.user.id} , {userInfo:userData.userInfo});
    res.send("Added");
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port " + port);
    }
    else {
        console.log("Error : " + error);
    }
})
