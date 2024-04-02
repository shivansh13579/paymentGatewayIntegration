
import { Router } from 'express';
import { checkout } from '../controllers/paymentController.js';

const router = Router();

router
      .route('/checkout')
      .post(checkout);


export default router;