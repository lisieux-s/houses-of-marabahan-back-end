import { Router } from "express";

import * as kindController from '../controllers/kindController.js';

const kindRouter = Router();
kindRouter.get('/kinds', kindController.getKinds)
kindRouter.post('/initialize-kinds', kindController.initializeKinds)

export default kindRouter;
