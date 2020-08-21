import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ItemEntity } from '../entity/item.entity';
import { ItemDTO } from './dto/item.dto';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>){}

    async showAll(){
        return await this.itemRepository.find();
    }

    async createItem(data: ItemDTO){
        const item = await this.itemRepository.create(data);
        await this.itemRepository.save(item);
        return item;
    }

    async checkItem(itemId: string){
        const result = this.itemRepository.findOne(itemId);
        return result ? true : false;
    }

}
