import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Incident } from './entities/incident.entity';
import { Repository } from 'typeorm';

import { User } from 'src/auth/entities/user.entity';


@Injectable()
export class IncidentsService {
  private readonly logger = new Logger('IncidentsService');
  constructor(
    @InjectRepository(Incident)
    private readonly incidentRepository: Repository<Incident>,

  ) {}

  async create(createIncidentDto: CreateIncidentDto,  user: User, secureUrl) {

    try {
      const incident = this.incidentRepository.create({
        ...createIncidentDto,
        user,
        image: secureUrl,
      });
      await this.incidentRepository.save(incident);

      return {
        success: true,
        incident
      }

    } catch (error) {
      this.handleDbExceptions(error);
    }

  }

  async findAll() {
    try {
      const incident =  await this.incidentRepository.find({
        relations: {
          user: true,
        }
      });
      return {
        success: true,
        incident
      };
    } catch (error) {
      this.handleDbExceptions(error);
    }
   
  }

  async findOne(id: string) {
    try {

      const incident =  await this.incidentRepository.findOneBy({ id });

      if ( !incident )
        throw new NotFoundException( `Incidente con el id: ${ id } no se encontro.` )

      return incident;
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  async findByUserId(user: User): Promise<Incident[]> {

    const userIncidents = await this.incidentRepository.find({
        relations: {
          user: true,
        },
        where: {
          user: {
            id: user.id.toString(),
          },
        },
    });
    if (!userIncidents) {
        throw new NotFoundException(`No se encontraron incidentes para el usuario con id ${user.id}`);
    }
    return userIncidents;
}

  async update(id: string, updateIncidentDto: UpdateIncidentDto, secureUrl: string) {

    const incident = await this.incidentRepository.findOneBy({ id });
    if (!incident) {
      throw new NotFoundException( `Incidente con el id: ${ id } no se encontro.` )
    }

    Object.assign(incident, {...updateIncidentDto, image: secureUrl});

    return await this.incidentRepository.save(incident);
  }

  async remove(id: string) {
    const incident  = await this.incidentRepository.findOneBy({ id});
    if (!incident) {
      throw new NotFoundException( `Incidente con el id: ${ id } no se encontro.` )
    }
    const deleted  = await this.incidentRepository.remove(incident);
    return deleted;

  }

  private handleDbExceptions( error : any) {

    if ( error.code === '23505' ) 
    throw new BadRequestException( error.detail )

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs')
  
  }
}
