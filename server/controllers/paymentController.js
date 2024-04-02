import { instance } from "../server.js";

export const checkout = async (req,res) => {

       try {
             const options = {
                 amount: 50000,
                 currency: "INR",
             };
     
          const order = await instance.orders.create(options);
     
          console.log(order);
          
          res.status(200).json({
             success: true,
             message: "successfully create order",
          })
       } catch (error) {
          console.log("Order will create successfully",error);
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