const express=require('express')
const cors=require('cors')
const mongoose=require('./db/config')
const User=require('./db/user')
const Product=require('./db/product')
const jwt=require('jsonwebtoken')

const jwtkey='e-comm';

const app=express();
app.use(express.json());
app.use(cors());


app.post('/register',async(req,resp)=>{
    let user=new User(req.body)
    let result=await user.save();
    result=result.toObject();
    delete result.password
    resp.send(result)
})

app.post('/login',async (req,resp)=>{
    if(req.body.password && req.body.email){
    let user=await User.findOne(req.body).select("-password");
    resp.send({user})
    }
    else{
        resp.send('no user found')
    }
})

app.post("/addProduct",async (req,resp)=>{
    let product=new Product(req.body)
    let result=await product.save();
    result=result.toObject();
    resp.send(result)
})

app.get("/products",async(req,resp)=>{
    let products=await Product.find();
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:"No product found"})
    }
})

app.delete('/del/:id',async (req,resp)=>{
        const result=await Product.deleteOne({_id:req.params.id})
        resp.send(result)
})

app.get('/update/:id', async (req,resp)=>{
    let result=await Product.findOne({_id:req.params.id})
    if(result){
        resp.send(result)
    }
    else{
        resp.send({result:'not found'})
    }
})

app.put("/update/:id",async(req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {$set:req.body})
    resp.send(result)
})

app.get("/search/:name",async(req,resp)=>{
        let result=await Product.findOne({
                name:req.params.name
        })
        resp.send(result)
}
)



app.listen(7000)