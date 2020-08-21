import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoxEntity } from '../entity/box.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { BoxDTO } from './dto/box.dto';
import { ItemBoxDTO } from 'src/itemBox/dto/itemBox.dto';

@Injectable()
export class BoxService {
    constructor(@InjectRepository(BoxEntity) private readonly boxRepository: Repository<BoxEntity>){}

    async showAll(){
        return await this.boxRepository.find();
    }

    async createBox(data: BoxDTO){
        const box = await this.boxRepository.create(data);
        await this.boxRepository.save(box);
        return box;
    }
}
