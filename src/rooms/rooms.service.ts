import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async create(room: CreateRoomDto): Promise<CreateRoomDto> {
    return await this.roomsRepository.save(room);
  }

  async update(id: number, room: UpdateRoomDto): Promise<UpdateRoomDto> {
    await this.roomsRepository.update(id, room);
    return this.roomsRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<any> {
    return await this.roomsRepository.delete(id);
  }
  async findAll(): Promise<Room[]> {
    return await this.roomsRepository.find({
      relations: {
        invoices: {
          dateSection: true,
        },
      },
    });
  }

  async findOne(id: number): Promise<Room | null> {
    return await this.roomsRepository.findOne({
      where: { id },
      relations: {
        invoices: {
          dateSection: true,
        },
      },
    });
  }
}
