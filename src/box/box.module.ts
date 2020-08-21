import { Module } from '@nestjs/common';
import { BoxController } from './box.controller';
import { BoxService } from './box.service';
import { BoxEntity } from '../entity/box.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BoxEntity])],
  controllers: [BoxController],
  providers: [BoxService]
})
export class BoxModule {}
