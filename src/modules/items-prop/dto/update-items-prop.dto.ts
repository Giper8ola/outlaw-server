import { PartialType } from '@nestjs/swagger';
import { CreateItemsPropDto } from './create-items-prop.dto';

export class UpdateItemsPropDto extends PartialType(CreateItemsPropDto) {}
