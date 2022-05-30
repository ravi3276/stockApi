import express from 'express';
import Stock from '../models/stock.js';

const router = express.Router();

router.post('/trades',async (req,res)=>{
    const stock =await  new Stock({
        purchasetype: req.body.purchasetype,
        user_id: req.body.user_id,
        symbol: req.body.symbol,
        shares: req.body.shares,
        price: req.body.price,
    });
    try{
       const dataStock= await stock.save();
        res.status(201).send(dataStock);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/trades',async (req, res) => {
        try{
            const stockData= await Stock.find({});
            stockData?res.status(200).send(stockData):res.status(404).send("No data found");
        }catch(e){
            res.status(400).send(e);
        }
});

router.get('/trades/:id',async (req, res) => {
        try{
            const stockData= await Stock.findById({_id:req.params.id});
            stockData?res.status(200).send(stockData):res.status(404).send("No data found");
        }catch(e){
            res.status(400).send(e);
        }
})

router.delete('/trades/:id',async (req, res) => {
        try{
            const stockData= await Stock.findByIdAndDelete({_id:req.params.id});
            stockData?res.status(200).send("data deleted succefully"):res.status(404).send("No data found");
        }catch(e){
            res.status(400).send(e);
        }
})

router.put('/trades/:id',async (req, res) => {
        try{
            const stockData= await Stock.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
            stockData?res.status(200).send(stockData):res.status(404).send("No data found");
        }catch(e){
            res.status(400).send(e);
        }
})

export default router;