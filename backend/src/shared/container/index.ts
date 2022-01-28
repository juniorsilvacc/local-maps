import { IStoreRepository } from '@modules/locals/domain/repositories/IStoreRepository';
import { StoreRepository } from '@modules/locals/infra/typeorm/repositories/StoreRepository';
import { container } from 'tsyringe';

container.registerSingleton<IStoreRepository>(
  'StoreRepository',
  StoreRepository,
);
