import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { ItemBoxEntity } from './ItemBox.entity';

@Entity('item')
export class ItemEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') description: string;

    @Column('integer') qnt: number;

    @OneToMany(type => ItemBoxEntity, ib => ib.itemId)
    boxConnection: Promise<ItemBoxEntity[]>;
}