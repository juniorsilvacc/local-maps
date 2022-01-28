import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('stores')
class Store {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  contact: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Store };
