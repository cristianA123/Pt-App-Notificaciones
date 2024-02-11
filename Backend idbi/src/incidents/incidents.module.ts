import { Module } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Incident } from './entities/incident.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [IncidentsController],
  providers: [IncidentsService],
  imports: [
    TypeOrmModule.forFeature([ Incident ]),
    AuthModule,
    ConfigModule
  ],
})
export class IncidentsModule {}
