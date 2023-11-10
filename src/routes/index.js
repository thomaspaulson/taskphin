import { Router } from 'express';
import { home } from '../controllers/index.js';

const homeRoute = Router();

homeRoute.get('/', home);

export default homeRoute;
