import { signUp } from '../handlers/user';
import express from 'express';

const router = express.Router();

router.get('/signup', signUp);

export default router;
