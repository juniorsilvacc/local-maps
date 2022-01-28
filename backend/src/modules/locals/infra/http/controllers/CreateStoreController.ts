import { CreateStoreService } from '@modules/locals/services/CreateStoreService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateStoreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, category, contact, latitude, longitude } =
      request.body;

    const createStoreService = container.resolve(CreateStoreService);

    const store = await createStoreService.execute({
      name,
      description,
      category,
      contact,
      latitude,
      longitude,
    });

    return response.json(store);
  }
}

export { CreateStoreController };
