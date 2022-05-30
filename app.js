import express from 'express';
import mongoose from 'mongoose';
import stock from './apis/stockapi.js'
const app = express();
const PORT=8000;
const url=""
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log('Connected to MongoDB')})
.catch(err=>{console.log('Error',err);});

app.use(express.json());
app.use('/', stock);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});