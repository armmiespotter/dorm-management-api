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
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    return await this.roomsService.create(createRoomDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateRoomDto: UpdateRoomDto) {
    const room = await this.roomsService.findOne(id);
    if (!room) {
      throw new NotFoundException(`Room doesn't exist!`);
    }
    return await this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const room = await this.roomsService.findOne(id);
    if (!room) {
      throw new NotFoundException(`Room doesn't exist!`);
    }
    return await this.roomsService.delete(id);
  }

  @Get()
  async findAll() {
    return await this.roomsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.roomsService.findOne(id);
  }
}
