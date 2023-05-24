import { Router } from 'express';

import * as kindController from '../controllers/kindController.js';
import * as categoryController from '../controllers/categoryController.js';
import * as itemController from '../controllers/itemController.js';

//add special creator auth middleware for creator routes
const creatorRouter = Router();
//K I N D S
creatorRouter.post('/initialize-kinds', kindController.initializeKinds);
creatorRouter.post(
  '/initialize-categories',
  categoryController.initializeCategories
);
creatorRouter.post('/initialize-items', itemController.initializeItems);


//C A T E G O R I E S
creatorRouter.get('/categories', categoryController.getAll);
creatorRouter.post('/categories/create', categoryController.create);

//I T E M S
creatorRouter.post('/items/create', itemController.create);
creatorRouter.put('/item/:id/edit', itemController.edit);
creatorRouter.get('/items', itemController.getAll);
export default creatorRouter;
