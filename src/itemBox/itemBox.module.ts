import { Module } from '@nestjs/common';
import { ItemBoxController } from './itemBox.controller';
import { ItemBoxService } from './itemBox.service';
import { ItemBoxEntity } from 'src/entity/ItemBox.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from 'src/item/item.module';
import { ItemEntity } from 'src/entity/item.entity';
import { BoxEntity } from 'src/entity/box.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemBoxEntity]), TypeOrmModule.forFeature([ItemEntity]), TypeOrmModule.forFeature([BoxEntity])],
  controllers: [ItemBoxController],
  providers: [ItemBoxService],
})
export class ItemBoxModule {}
