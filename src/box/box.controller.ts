import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoxService } from './box.service';
import { BoxDTO } from './dto/box.dto';

@Controller('box')
export class BoxController {
    constructor(private readonly boxService: BoxService){}

    @Get()
    showAllItems(){
        return this.boxService.showAll();
    }

    @Post()
    createItem(@Body() data: BoxDTO){
        return this.boxService.createBox(data);
    }
}
