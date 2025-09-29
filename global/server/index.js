const express=require('express')
const app=express()
const cors=require('cors')
const {connection}=require('./db')
const { Newcollection } = require('./Routes/Newcollection')
const { WhychooseRoute } = require('./Routes/Whychoose')
const { ShopByRoomRoute } = require('./Routes/ShopByRoom')
const { ShopByCategorieRoute } = require('./Routes/ShopByCategoies')
require('dotenv').config()

app.use(cors({
    origin: '*',
    methods: ['GET','POST','PUT','DELETE','OPTIONS']
   
}));

// Handle preflight requests
// app.options('*', cors());

app.use(express.json())
app.use('/whychoose',WhychooseRoute)
app.use('/shopbyroom',ShopByRoomRoute)
app.use('/shopbycategories',ShopByCategorieRoute)
app.use('/newcollection',Newcollection)



app.get('/', async(req,res)=>{
    try {
        res.send({msg:"welcome"})
    } catch (error) {
        res.send({err:error})
    }
})
app.listen(process.env.PORT,async ()=>{
try {
    await connection
    console.log('server is running');
    
      
} catch (error) {
    console.log(error);
    
}
})
