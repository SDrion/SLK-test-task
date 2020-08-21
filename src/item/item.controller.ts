import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './dto/item.dto';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService){}

        @Get()
        showAllItems(){
            return this.itemService.showAll();
        }

        @Post()
        createItem(@Body() data: ItemDTO){
            return this.itemService.createItem(data);
        }
}
