import mongoose from "mongoose";

const Stock=new mongoose.Schema({
        id:{ type: mongoose.Schema.Types.ObjectId },
        purchasetype: {type:String,required:true},
        user_id: {type:Number,required:true},
        symbol: {type:String,required:true},
        shares: {type:Number,required:true},
        price: {type:Number,required:true},
},{timestamps:true});

export default mongoose.model("Stock",Stock);