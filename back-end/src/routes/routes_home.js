import express from 'express';
import { Home } from '../controllers/homeController.js';

const homeRoutes = express.Router();

homeRoutes.get('/', Home);

export default homeRoutes;