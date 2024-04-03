import { instance } from "../server.js";
import  crypto from 'crypto';

export const checkout = async (req,res) => {

       try {
             const options = {
                 amount: Number(req.body.amount * 100),
                 currency: "INR",
             };
     
          const order = await instance.orders.create(options);
     
          
          res.status(200).json({
             success: true,
             order,
          })
       } catch (error) {
          console.log("Order will create successfully",error);
       }

}

export const paymentVarification = async (req,res) => {

   const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;

   const body = razorpay_order_id + "|" +razorpay_payment_id;

   const expectedSignature = crypto
        .createHmac('sha256',process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');

   const isAuthentic = expectedSignature === razorpay_signature

   if(isAuthentic){

   }else{
      res.status(200).json({
         success: false,
      })
   }



}

// export const getRazorpayApiKey = async (req,res) => {
       
//   try {
//     res.status(200).json({
//        success: true,
//        message: "Razorpay Api Key",
//        key: process.env.RAZORPAY_API_KEY,
//     })
//   } catch (error) {
//      console.log("request rejected", error);
//   }
// }