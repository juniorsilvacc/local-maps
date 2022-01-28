import { inject, injectable } from 'tsyringe';
import { IStoreRepository } from '../domain/repositories/IStoreRepository';
import { Store } from '../infra/typeorm/entities/Store';

@injectable()
class ListStoreService {
  constructor(
    @inject('StoreRepository')
    private storesRepository: IStoreRepository,
  ) {}

  async execute(): Promise<Store[]> {
    const stores = await this.storesRepository.findAll();

    return stores;
  }
}

export { ListStoreService };
