import { home } from '../handlers/home';
import express from 'express';

const router = express.Router();

router.get('/', home);

export default router;
