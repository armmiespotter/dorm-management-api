import { Module } from '@nestjs/common';
import { DateSectionsService } from './date-sections.service';
import { DateSectionsController } from './date-sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DateSection } from './entities/date-section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DateSection])],
  controllers: [DateSectionsController],
  providers: [DateSectionsService],
  exports: [DateSectionsService],
})
export class DateSectionsModule {}
