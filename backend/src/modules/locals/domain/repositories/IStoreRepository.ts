import { Store } from '@modules/locals/infra/typeorm/entities/Store';
import { ICreateStoreDTO } from '../dtos/ICreateStoreDTO';

interface IStoreRepository {
  create(data: ICreateStoreDTO): Promise<Store>;
  findByName(name: string): Promise<Store | undefined>;
}

export { IStoreRepository };
