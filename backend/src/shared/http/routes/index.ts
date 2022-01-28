import { routesStores } from '@modules/locals/infra/http/routes/stores.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/stores', routesStores);

export { routes };
