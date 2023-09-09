import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Invoice } from 'src/invoices/entities/invoice.entity';
@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column()
  price: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Invoice, (invoices) => invoices.room)
  invoices: Invoice[];
}
