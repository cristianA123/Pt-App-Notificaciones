import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, MinLength } from "class-validator";

export class CreateIncidentDto {

    @ApiProperty({
        example: 'Asunto del incidente',
        description: 'Asunto del incidente',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    issue: string;

    @ApiProperty({
        example: 'Tipos de insidente',
        description: 'Actos inseguros',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    type_of_incident: string;

    @ApiProperty({
        example: 'Detalle de los incidentes',
        description: 'detalle',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    details_of_incidents: string;

    @ApiProperty({
        example: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        description: 'Imagen',
        nullable: false,
    })  
    image: string;

    @ApiProperty({
        example: 'pendiente',
        nullable: false,
        minLength: 1,
        default: 'pendiente'
    })
    @IsString()
    state: string;


}
