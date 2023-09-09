import { Injectable } from '@nestjs/common';
import { CreateDateSectionDto } from './dto/create-date-section.dto';
import { UpdateDateSectionDto } from './dto/update-date-section.dto';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { DateSection } from './entities/date-section.entity';

@Injectable()
export class DateSectionsService {
  constructor(
    @InjectRepository(DateSection)
    private dateSectionRepository: Repository<DateSection>,
  ) {}

  async create(
    CreateDateSectionDto: CreateDateSectionDto,
  ): Promise<CreateDateSectionDto> {
    return await this.dateSectionRepository.save(CreateDateSectionDto);
  }

  async update(
    id: number,
    invoice: UpdateDateSectionDto,
  ): Promise<UpdateDateSectionDto> {
    await this.dateSectionRepository.update(id, invoice);
    return this.dateSectionRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<any> {
    return await this.dateSectionRepository.delete(id);
  }

  async findAll(): Promise<DateSection[]> {
    return await this.dateSectionRepository.find();
  }

  async findOne(id: number): Promise<DateSection | null> {
    return await this.dateSectionRepository.findOneBy({ id });
  }
}
