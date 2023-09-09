import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Invoice } from './entities/invoice.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoicesRepository: Repository<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<CreateInvoiceDto> {
    return await this.invoicesRepository.save(createInvoiceDto);
  }

  async update(
    id: number,
    invoice: UpdateInvoiceDto,
  ): Promise<UpdateInvoiceDto> {
    await this.invoicesRepository.update(id, invoice);
    return this.invoicesRepository.findOne({
      where: { id },
      relations: ['room', 'dateSection'],
    });
  }

  async delete(id: number): Promise<any> {
    return await this.invoicesRepository.delete(id);
  }

  async findAll(): Promise<Invoice[]> {
    return await this.invoicesRepository.find({
      relations: ['room', 'dateSection'],
    });
  }

  async findOne(id: number): Promise<Invoice | null> {
    return await this.invoicesRepository.findOne({
      where: { id },
      relations: ['room', 'dateSection'],
    });
  }
}
