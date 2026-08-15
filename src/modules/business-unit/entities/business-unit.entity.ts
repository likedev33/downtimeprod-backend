import { BaseEntity } from 'src/shared/entities/base.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'business_unit' })
export class BusinessUnit extends BaseEntity{

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
  @Column({
    type: 'varchar',
    length: 150,
  })
  name!: string;

  /**
   * Display description
   */
  @Column({
    type: 'varchar',
    length: 150,
  })
  description!: string;

}
