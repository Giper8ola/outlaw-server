import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common';
import { ItemsTypeService } from './items-type.service';
import { CreateItemsTypeDto } from './dto/create-items-type.dto';
import { UpdateItemsTypeDto } from './dto/update-items-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';
@ApiBearerAuth()
@ApiTags('items-type')
@Controller('items-type')
@AuthWithArea(AreasEnum.item)
export class ItemsTypeController {
    constructor(private readonly itemsTypeService: ItemsTypeService) {}

    @Post('create')
    async create(@Body() createItemsTypeDto: CreateItemsTypeDto) {
        return await this.itemsTypeService.create(createItemsTypeDto);
    }

    @Get()
    findAll() {
        return this.itemsTypeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsTypeService.findOne(+id);
    }

    @Patch('update:id')
    update(
        @Param('id') id: string,
        @Body() updateItemsTypeDto: UpdateItemsTypeDto
    ) {
        return this.itemsTypeService.update(+id, updateItemsTypeDto);
    }

    @Delete('delete:id')
    remove(@Param('id') id: string) {
        return this.itemsTypeService.remove(+id);
    }
}
