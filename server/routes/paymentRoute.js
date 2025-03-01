
import { Router } from 'express';
import { checkout, paymentVarification } from '../controllers/paymentController.js';

const router = Router();

router
      .route('/checkout')
      .post(checkout);

router
    .route('/paymentvarification').post(paymentVarification)


export default router;