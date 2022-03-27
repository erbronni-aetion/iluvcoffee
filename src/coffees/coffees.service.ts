import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['salty', 'brine'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    const id = 1 + this.coffees.reduce((i, c) => Math.max(i, c.id), 0);
    this.coffees.push({
      ...createCoffeeDto,
      id,
    });
    return this.findOne(`${id}`);
  }

  update(id: string, updateCoffeeDto: any) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees[coffeeIndex] = {
        ...this.coffees[coffeeIndex],
        ...updateCoffeeDto,
        id: +id,
      };
      return this.coffees[coffeeIndex];
    }
    return null;
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
      return { id: +id };
    }
    return null;
  }
}
