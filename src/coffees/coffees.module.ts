import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(['folgers', 'maxwell house', 'startbucks']),
        0,
      );
    });
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  exports: [CoffeesService],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS,
      inject: [CoffeeBrandsFactory],
      useFactory: async (coffeeBrandsFactory) => {
        return await coffeeBrandsFactory.create();
      },
    },
  ],
})
export class CoffeesModule {}
