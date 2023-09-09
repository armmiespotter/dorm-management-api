import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { DateSectionsService } from './date-sections.service';
import { CreateDateSectionDto } from './dto/create-date-section.dto';
import { UpdateDateSectionDto } from './dto/update-date-section.dto';

@Controller('date-sections')
export class DateSectionsController {
  constructor(private readonly dateSectionsService: DateSectionsService) {}

  @Post()
  async create(@Body() createDateSectionDto: CreateDateSectionDto) {
    return await this.dateSectionsService.create(createDateSectionDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRoomDto: UpdateDateSectionDto,
  ) {
    const dateSection = await this.dateSectionsService.findOne(id);
    if (!dateSection) {
      throw new NotFoundException(`DateSection doesn't exist!`);
    }
    return await this.dateSectionsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const room = await this.dateSectionsService.findOne(id);
    if (!room) {
      throw new NotFoundException(`DateSection doesn't exist!`);
    }
    return await this.dateSectionsService.delete(id);
  }

  @Get()
  async findAll() {
    return await this.dateSectionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.dateSectionsService.findOne(id);
  }
}
