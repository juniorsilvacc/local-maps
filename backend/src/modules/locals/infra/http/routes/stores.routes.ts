import { Router } from 'express';
import { CreateStoreController } from '../controllers/CreateStoreController';

const routesStores = Router();

const createStoreController = new CreateStoreController();

routesStores.post('/', createStoreController.handle);

export { routesStores };
