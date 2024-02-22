import { OmitType } from '@nestjs/swagger';
import { CreateServerDto } from './create-server.dto';

export class UpdateServerDto extends OmitType(CreateServerDto, [
    'version',
    'clusterId'
] as const) {}
