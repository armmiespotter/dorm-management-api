import { PartialType } from '@nestjs/mapped-types';
import { CreateDateSectionDto } from './create-date-section.dto';

export class UpdateDateSectionDto extends PartialType(CreateDateSectionDto) {}
