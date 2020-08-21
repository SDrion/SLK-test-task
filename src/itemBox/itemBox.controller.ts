import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ItemBoxService } from './itemBox.service';
import { ItemBoxDTO } from './dto/itemBox.dto';

@Controller('item-box')
export class ItemBoxController {
    constructor(private readonly itemBoxService: ItemBoxService){}

        @Post()
        putItemInBox(@Body() data: ItemBoxDTO){
            return this.itemBoxService.putItemInBox(data);
        }

        @Delete()
        deleteItem(@Body() data: ItemBoxDTO){
            return this.itemBoxService.deleteItem(data);
        }

        @Get(':id')
        showItemsInBox(@Param('id' )id: string){
            return this.itemBoxService.showItems(id);
        }

        @Get()
        showAll(){
            return this.itemBoxService.showAll();
        }
}
