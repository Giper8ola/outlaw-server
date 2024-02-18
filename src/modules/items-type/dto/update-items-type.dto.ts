import { PartialType } from '@nestjs/swagger';
import { CreateItemsTypeDto } from './create-items-type.dto';

export class UpdateItemsTypeDto extends PartialType(CreateItemsTypeDto) {}
