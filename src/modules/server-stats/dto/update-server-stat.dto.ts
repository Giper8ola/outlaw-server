import { PartialType } from '@nestjs/swagger';
import { CreateServerStatDto } from './create-server-stat.dto';

export class UpdateServerStatDto extends PartialType(CreateServerStatDto) {}
