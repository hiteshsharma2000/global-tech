const mongoose=require('mongoose')
const ShopByCategoriesSchema=new mongoose.Schema({
    title:String,
    desciption:String,
    img:String
})

const ShopByCategoriesModel=mongoose.model('ShopBycategories',ShopByCategoriesSchema)

module.exports={ShopByCategoriesModel}