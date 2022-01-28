import { Router } from 'express';
import { CreateStoreController } from '../controllers/CreateStoreController';
import { ListStoreController } from '../controllers/ListStoreController';

const routesStores = Router();

const createStoreController = new CreateStoreController();
const listStoreController = new ListStoreController();

routesStores.post('/', createStoreController.handle);

routesStores.get('/', listStoreController.handle);

export { routesStores };
