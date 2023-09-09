import { DateSection } from './../../date-sections/entities/date-section.entity';
import { Room } from 'src/rooms/entities/room.entity';

export class CreateInvoiceDto {
  id: number;
  waterPrice: number;
  electricityPrice: number;
  isActive: boolean;
  room: Room;
  dateSection: DateSection;
}
