import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { BoxModule } from './box/box.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemBoxModule } from './itemBox/itemBox.module';


@Module({
  imports: [ItemModule, BoxModule, ItemBoxModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
