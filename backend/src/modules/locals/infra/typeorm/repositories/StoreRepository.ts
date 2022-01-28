import { ICreateStoreDTO } from '@modules/locals/domain/dtos/ICreateStoreDTO';
import { IStoreRepository } from '@modules/locals/domain/repositories/IStoreRepository';
import { getRepository, Repository } from 'typeorm';
import { Store } from '../entities/Store';

class StoreRepository implements IStoreRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async findAll(): Promise<Store[]> {
    const all = await this.repository.find();

    return all;
  }

  async findByName(name: string): Promise<Store | undefined> {
    const store = await this.repository.findOne({ name });

    return store;
  }

  async create({
    name,
    description,
    category,
    contact,
    latitude,
    longitude,
  }: ICreateStoreDTO): Promise<Store> {
    const createStore = this.repository.create({
      name,
      description,
      category,
      contact,
      latitude,
      longitude,
    });

    await this.repository.save(createStore);

    return createStore;
  }
}

export { StoreRepository };
