const mongoose=require('mongoose')
require('dotenv').config()

const connection=mongoose.connect(process.env.MONGOURL)

connection.then(()=>{
    console.log('server is live');
    
}).catch((err)=>{
    console.log(`error:${err}`);
    
})
module.exports={connection}