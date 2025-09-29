const express=require('express')
const ShopByRoomRoute=express.Router()
const {ShopByRoomModel}=require('../models/ShopByRoom')

ShopByRoomRoute.get('/',async (req,res)=>{
    try {
        let data=await ShopByRoomModel.find()
        res.send({"data":data})

        
    } catch (error) {
        res.send({'err':error})
        
    }
})
ShopByRoomRoute.post('/create',async (req,res)=>{
    let payload=req.body
    try {
        let newentry=ShopByRoomModel(payload)
        await newentry.save()
        res.send({"msg":'new entry has been register'})

        
    } catch (error) {
        res.send({'err':error})
        
    }
})

module.exports={ShopByRoomRoute}