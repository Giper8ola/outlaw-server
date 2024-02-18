import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateItemsPropDto } from './create-items-prop.dto';

export class UpdateItemsPropDto extends OmitType(CreateItemsPropDto, ['itemId', 'version'] as const) {}
