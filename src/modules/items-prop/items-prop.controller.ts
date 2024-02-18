import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete
} from '@nestjs/common';
import { ItemsPropService } from './items-prop.service';
import { CreateItemsPropDto } from './dto/create-items-prop.dto';
import { UpdateItemsPropDto } from './dto/update-items-prop.dto';

@Controller('items-prop')
export class ItemsPropController {
    constructor(private readonly itemsPropService: ItemsPropService) {}

    @Post()
    create(@Body() createItemsPropDto: CreateItemsPropDto) {
        return this.itemsPropService.create(createItemsPropDto);
    }

    @Get()
    findAll() {
        return this.itemsPropService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsPropService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateItemsPropDto: UpdateItemsPropDto
    ) {
        return this.itemsPropService.update(+id, updateItemsPropDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemsPropService.remove(+id);
    }
}
