import { ListStoreService } from '@modules/locals/services/ListStoreService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListStoreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listStoreService = container.resolve(ListStoreService);

    const stores = await listStoreService.execute();

    return response.json(stores);
  }
}

export { ListStoreController };
