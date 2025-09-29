const express=require('express')
const ShopByCategorieRoute=express.Router()
const {ShopByCategoriesModel}=require('../models/ShopByCategories')

ShopByCategorieRoute.get('/',async (req,res)=>{
    try {
        let data=await ShopByCategoriesModel.find()
        res.send({"data":data})

        
    } catch (error) {
        res.send({'err':error})
        
    }
})
ShopByCategorieRoute.post('/create',async (req,res)=>{
    let payload=req.body
    try {
        let newentry=ShopByCategoriesModel(payload)
        await newentry.save()
        res.send({"msg":'new entry has been register'})

        
    } catch (error) {
        res.send({'err':error})
        
    }
})

module.exports={ShopByCategorieRoute}