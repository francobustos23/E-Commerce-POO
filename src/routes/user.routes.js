import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.controllers.js';


const router = Router();

//read all users
router.get('/users', getUsers);
//create user
router.post('/user', createUser);
//update user
router.post('/user/:id', updateUser);
//delete user
router.delete('/user/:id', deleteUser);

export default router;