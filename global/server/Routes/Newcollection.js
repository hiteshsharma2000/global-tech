const express=require('express')
const { Newcollectionmodel } = require('../models/Newcollection')
const Newcollection=express.Router()


Newcollection.get("/",async (req,res)=>{
    try {
        const data=await Newcollectionmodel.find()
        res.send({"data":data})
        
    } catch (error) {
        res.send({"error":error})
    }
})
Newcollection.post("/create",async (req,res)=>{
    const payload=req.body;
    try {
        const newentry=Newcollectionmodel(payload)
        await newentry.save()
        res.send({msg:"entry is created"})
        
    } catch (error) {
        res.send({"error":error})
    }
})
// Express backend
Newcollection.get("/image/:id", async (req, res) => {
  try {
    const fileId = req.params.id;
    const url = `https://drive.google.com/uc?export=view&id=${fileId}`;
    const response = await fetch(url);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.set("Content-Type", "image/jpeg");
    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching image");
  }
});


module.exports={Newcollection}
