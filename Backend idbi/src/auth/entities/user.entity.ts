
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Min } from 'class-validator';
import { Product } from 'src/products/entities';
import { Incident } from 'src/incidents/entities/incident.entity';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('text',{
        nullable: true,
        select: false
    })
    password: string;

    @Column('text', {
        nullable: true,
    })
    fullName: string;

    @Column( 'bool', {
        nullable: true,
        default: true
    } )
    isActive: boolean;

    @Column( 'text', {
        nullable: true,
        default: 'user'
    } )
    role: string;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];


    @OneToMany(() => Incident, (incident) => incident.user)
    incident: Incident[];

    @OneToMany(
        ( ) => Product,
        ( product ) => product.user
    )
    product: Product;

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLowerCase().trim()
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate(){
        this.checkFieldsBeforeInsert()
    }


}
