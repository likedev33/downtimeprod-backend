import { BaseEntity } from 'src/shared/entities/base.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'contact' })
export class Contact extends BaseEntity {


  /**
   * Functional unique code
   */
  @Column({
    type: 'varchar',
    length: 30,
    unique: true,
  })
  code!: string;

  /**
   * Display name
   */
  @Column({ type: 'varchar', length: 255, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  phone?: string;

}
