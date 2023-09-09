import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Room } from 'src/rooms/entities/room.entity';
import { DateSection } from 'src/date-sections/entities/date-section.entity';
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  waterPrice: number;

  @Column()
  electricityPrice: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Room, (room) => room.invoices)
  room!: Room;

  @ManyToOne(() => DateSection, (dateSection) => dateSection.invoices)
  dateSection: DateSection;
}
