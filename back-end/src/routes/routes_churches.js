import express from 'express';
import { deleteChurch, listAllChurches, listOneChurch, registerChurch, updateChurch } from '../controllers/churchController.js';
import { validateMiddlewaresChurch } from '../middlewares/validateMiddlewaresChurch.js';

const churchesRoutes = express.Router();

churchesRoutes.get('/church', listAllChurches);
churchesRoutes.get('/church/:id_church', listOneChurch);
churchesRoutes.post('/church', validateMiddlewaresChurch, registerChurch);
churchesRoutes.put('/church/:id_church', validateMiddlewaresChurch, updateChurch);
churchesRoutes.delete('/church/:id_church', deleteChurch);

export default churchesRoutes;
