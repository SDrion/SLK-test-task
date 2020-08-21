import { Injectable } from '@nestjs/common';
import { ItemBoxEntity } from '../entity/ItemBox.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemBoxDTO } from './dto/itemBox.dto';
import { ItemEntity } from 'src/entity/item.entity';
import { BoxEntity } from 'src/entity/box.entity';



@Injectable()
export class ItemBoxService {
    constructor(@InjectRepository(ItemBoxEntity) private readonly itemBoxRepository: Repository<ItemBoxEntity>,
    @InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>,
    @InjectRepository(BoxEntity) private readonly boxRepository: Repository<BoxEntity>
    ){}

    async putItemInBox(data: ItemBoxDTO){
        try{ 
            const item = await this.itemRepository.findOne(data.itemId);
            const box = await this.boxRepository.findOne(data.boxId);
            if(!item){
                return `Cant find ${data.itemId} item`;
            } else if(data.qnt > item.qnt){
                return `You dont have ${data.qnt} items`;
            } else if(!box) {
                return `Cant find ${data.boxId} item`;
            }
            item.qnt -= data.qnt;
            await this.itemBoxRepository.save(data);
            item.save();
            return data;
        } catch(e) {
            throw new Error(e);
        }
        
    }

    async deleteItem(data: ItemBoxDTO){
        try{ 
            
            const itemInBox = await this.itemBoxRepository.findOne({"boxId":data.boxId,"itemId":data.itemId});
            await this.itemBoxRepository.remove(itemInBox);
            const item = await this.itemRepository.findOne(data.itemId);
            item.qnt += itemInBox.qnt;
            item.save();
            return 'Done';
        } catch(e) {
            throw new Error(e);
        }

    }

    async showItems(boxId: string){
        const items = [];
        
        const itemsAndBoxesArray = await this.itemBoxRepository.find();

        itemsAndBoxesArray.map(element => {
            if(element.boxId === boxId) {
                items.push(element.itemId);
            }
        })

        return items;
    }

    async showAll(){
        return this.itemBoxRepository.find();
    }


}