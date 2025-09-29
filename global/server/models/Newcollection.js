const mongoose=require('mongoose')

const NewcollectionSchema=new mongoose.Schema({
   
    title: String,
    price: String,
    oldPrice: String,
    discount: String,
    img: String,
},{
    versionKey:false
})
const Newcollectionmodel=mongoose.model('newcollection',NewcollectionSchema)

module.exports={Newcollectionmodel}

