import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { ItemBoxEntity } from './ItemBox.entity';

@Entity('box')
export class BoxEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') description: string;

    @OneToMany(type => ItemBoxEntity, ib => ib.boxId)
    itemConnection: Promise<ItemBoxEntity[]>;
}