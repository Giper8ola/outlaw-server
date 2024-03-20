import { PartialType } from '@nestjs/swagger';
import { CreateClustersStatDto } from './create-clusters-stat.dto';

export class UpdateClustersStatDto extends PartialType(CreateClustersStatDto) {}
