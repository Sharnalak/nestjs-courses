import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  foo: process.env.FOO || 'defaultFoo',
  bar: process.env.BAR || 'defaultBar',
}));
