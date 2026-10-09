import { DataSource } from 'typeorm';
import { Coffee } from './coffees/entities/coffee.entity';
import { Flavor } from './coffees/entities/flavor.entity';
import { CoffeeRefactor1791209129260 } from './migrations/1791209129260-CoffeeRefactor';
import { SchemaSync1791210469006 } from './migrations/1791210469006-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1791209129260, SchemaSync1791210469006],
});
