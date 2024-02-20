import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ItemsPropService } from './items-prop.service';
import { CreateItemsPropDto } from './dto/create-items-prop.dto';
import { UpdateItemsPropDto } from './dto/update-items-prop.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.item)
@ApiTags('item-prop')
@Controller('items-prop')
export class ItemsPropController {
    constructor(private readonly itemsPropService: ItemsPropService) {}

    @Post('create')
    create(@Body() createItemsPropDto: CreateItemsPropDto) {
        return this.itemsPropService.create(createItemsPropDto);
    }

    @Patch('update:id')
    update(
        @Param('id') id: string,
        @Body() updateItemsPropDto: UpdateItemsPropDto
    ) {
        return this.itemsPropService.update(+id, updateItemsPropDto);
    }

    @Delete('delete:id')
    remove(@Param('id') id: string) {
        return this.itemsPropService.remove(+id);
    }
}
