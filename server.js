import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
app.get('/health',(req,res)=>res.json({ok:true,app:'Uttam Enterprises Digital Service Mall API',mode:'development'}));
app.post('/auth/request-otp',(req,res)=>res.status(501).json({message:'Connect an approved SMS OTP provider before enabling real OTP delivery.'}));
app.post('/auth/verify-otp',(req,res)=>res.status(501).json({message:'Production authentication is not configured.'}));
app.get('/services',(req,res)=>res.json({items:[
 {id:'pan-new',name:'PAN Card New',status:'catalog-placeholder'},
 {id:'voter',name:'Voter Services',status:'catalog-placeholder'},
 {id:'pf',name:'PF Services',status:'catalog-placeholder'},
 {id:'gst',name:'GST Registration',status:'catalog-placeholder'},
 {id:'udyam',name:'MSME / Udyam',status:'catalog-placeholder'}
]}));
app.post('/orders',(req,res)=>res.status(501).json({message:'Connect database, authorization and service provider workflow before accepting orders.'}));
app.listen(4000,()=>console.log('API starter running on http://localhost:4000'));
