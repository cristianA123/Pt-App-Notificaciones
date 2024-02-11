import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from './helpers';
import { diskStorage } from 'multer';
import { ConfigService } from '@nestjs/config';

@ApiTags('Incidents')
@Controller('incidents')
@Auth()
export class IncidentsController {
  constructor(
    private readonly incidentsService: IncidentsService,
    private readonly configService: ConfigService,
    ) {}

  @Post()
  @UseInterceptors( FileInterceptor('image', {
    fileFilter: fileFilter,
    // limits: { fileSize: 1000 }
    storage:  diskStorage({
      destination: './static/incident',
      filename: fileNamer
    })
  }) )
  create(@Body() createIncidentDto: CreateIncidentDto, @GetUser() user: User, @UploadedFile() image: Express.Multer.File) {
    
    if ( !image ) {
      throw new BadRequestException('Asegúrese de que el archivo sea una imagen válida')
    }

    const secureUrl = `${this.configService.get('HOST_API')}/files/incident/${ image.filename }`;

    return this.incidentsService.create(createIncidentDto, user, secureUrl);
  }

  @Get()
  findAll() {
    return this.incidentsService.findAll();
  }

  @Get('/user')
  findByUserId(@GetUser() user: User) {
    return this.incidentsService.findByUserId(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentsService.findOne(id);
  }


  @Patch(':id')
  @UseInterceptors( FileInterceptor('image', {
    fileFilter: fileFilter,
    // limits: { fileSize: 1000 }
    storage:  diskStorage({
      destination: './static/incident',
      filename: fileNamer
    })
  }) )
  update(@Param('id') id: string, @Body() updateIncidentDto: UpdateIncidentDto, @UploadedFile() image: Express.Multer.File) {
    if ( !image ) {
      throw new BadRequestException('Asegúrese de que el archivo sea una imagen válida')
    }

    const secureUrl = `${this.configService.get('HOST_API')}/files/incident/${ image.filename }`;
    return this.incidentsService.update(id, updateIncidentDto, secureUrl);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentsService.remove(id);
  }
}
