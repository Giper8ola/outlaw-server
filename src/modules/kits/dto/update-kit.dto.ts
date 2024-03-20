import { OmitType } from '@nestjs/swagger';
import { CreateKitDto } from './create-kit.dto';

export class UpdateKitDto extends OmitType(CreateKitDto, [
    'privilegeId'
] as const) {}
