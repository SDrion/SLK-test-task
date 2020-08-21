import { ItemEntity } from './item.entity';
import { BoxEntity } from './box.entity';
import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';

@Entity('item_box')
export class ItemBoxEntity extends BaseEntity {
    @PrimaryColumn()
    boxId: string;

    @PrimaryColumn()
    itemId: string;

    @Column('integer')
    qnt: number;

    @ManyToOne(type => BoxEntity, box => box.itemConnection, { primary: true })
    @JoinColumn({ name: 'boxId' })
    box: Promise<BoxEntity>;

    @ManyToOne(type => ItemEntity, item => item.boxConnection, { primary: true })
    @JoinColumn({ name: 'itemId' })
    item: Promise<ItemEntity>;

}