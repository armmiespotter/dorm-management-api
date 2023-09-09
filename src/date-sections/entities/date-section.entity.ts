import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Invoice } from 'src/invoices/entities/invoice.entity';
@Entity()
export class DateSection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  month: string;

  @Column()
  year: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Invoice, (invoice) => invoice.dateSection)
  invoices: Invoice[];
}
