import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { InvoicesModule } from './invoices/invoices.module';
import { DateSectionsModule } from './date-sections/date-sections.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Room } from './rooms/entities/room.entity';
import { Invoice } from './invoices/entities/invoice.entity';
import { DateSection } from './date-sections/entities/date-section.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'dorm-management',
      entities: [Room, Invoice, DateSection],
      synchronize: true,
    }),
    RoomsModule,
    InvoicesModule,
    DateSectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
