import express from 'express';


const churchesRoutes = express.Router();

churchesRoutes.get('/church');
churchesRoutes.get('/church/:id_church');
churchesRoutes.post('/church');
churchesRoutes.put('/church/:id_church');
churchesRoutes.delete('/church/id_church');

export default churchesRoutes;