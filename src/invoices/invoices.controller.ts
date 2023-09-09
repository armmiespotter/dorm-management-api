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
import { InvoicesService } from './invoices.service';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return await this.invoicesService.create(createInvoiceDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    const invoice = await this.invoicesService.findOne(id);
    if (!invoice) {
      throw new NotFoundException(`Invoice doesn't exist!`);
    }
    return await this.invoicesService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const invoice = await this.invoicesService.findOne(id);
    if (!invoice) {
      throw new NotFoundException(`Invoice doesn't exist!`);
    }
    return await this.invoicesService.delete(id);
  }

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.invoicesService.findOne(id);
  }
}
