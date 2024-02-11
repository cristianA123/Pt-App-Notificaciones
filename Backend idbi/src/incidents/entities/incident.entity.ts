
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm'
// import { User } from 'src/auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';

@Entity({ name: 'incidents' })
export class Incident {

    @ApiProperty({
        example: 'a5300627-2f71-4f47-88ac-6efda7420190',
        description: 'Product id',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'esta es el polo bien chido',
        description: 'Product description',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        nullable: true
    })
    issue: string;

    @ApiProperty({
        example: 'esta es el polo bien chido',
        description: 'Product description',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        nullable: true
    })
    type_of_incident: string;

    @ApiProperty({
        example: 'esta es el polo bien chido',
        description: 'Product description',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        nullable: true
    })
    details_of_incidents: string;

    @ApiProperty({
        example: 'esta es el polo bien chido',
        description: 'Product description',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        nullable: true
    })
    image: string;

    @ApiProperty({
        example: 'pendiente',
        description: 'Estado de la incidencia',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        nullable: true
    })
    state: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.incident)
    user: User

}

