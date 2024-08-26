import { Router } from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productos.controllers.js';

const router = Router();

//read all products
router.get('/products', getProducts)
//create product
router.post('/product', createProduct)
//update product
router.post('/product/:id', updateProduct)
//delete product
router.delete('/product/:id', deleteProduct)

export default router;