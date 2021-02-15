import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Users from './Users'
@Entity('images')
export default class Image{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @ManyToOne( () => Users, users => users.images )
    @JoinColumn({name: 'user_id'})
    users: Users 
}