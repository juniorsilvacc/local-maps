import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateStoreDTO } from '../domain/dtos/ICreateStoreDTO';
import { IStoreRepository } from '../domain/repositories/IStoreRepository';
import { Store } from '../infra/typeorm/entities/Store';

@injectable()
class CreateStoreService {
  constructor(
    @inject('StoreRepository')
    private storesRepository: IStoreRepository,
  ) {}

  async execute({
    name,
    description,
    category,
    contact,
    latitude,
    longitude,
  }: ICreateStoreDTO): Promise<Store> {
    const store = await this.storesRepository.findByName(name);

    if (store) {
      throw new AppError('Store already exists');
    }

    const create = await this.storesRepository.create({
      name,
      description,
      category,
      contact,
      latitude,
      longitude,
    });

    return create;
  }
}

export { CreateStoreService };
