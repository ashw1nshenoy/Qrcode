import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import qr from "qr-image";
import fs from "fs";
import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
const port =3000
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/ashwin.html");
})
app.post("/",function(req,res){
  const url=req.body.url;
  console.log(url)
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("qr_image.png"));
  res.sendFile(__dirname+"/qr_image.png")
})
app.listen(port, () => {
  console.log("Server started");
});