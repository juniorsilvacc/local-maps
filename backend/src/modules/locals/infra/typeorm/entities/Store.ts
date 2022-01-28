import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('stores')
class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  contact: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Store };
