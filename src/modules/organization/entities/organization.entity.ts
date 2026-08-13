import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

@Entity('organizations')
@Index(['code'], { unique: true })

export class Organization {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ length: 150 })
    name: string;
    @Column({ length: 50 })
    code: string;
    @Column({ type: 'text', nullable: true })
    description?: string;
    @Column({ length: 100, nullable: true })
    industry?: string;
    @Column({ length: 100, nullable: true })
    country?: string;
    @Column({ length: 100, nullable: true })
    timezone?: string;
    @Column({ default: true })
    isActive: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
  
}

/*
Exemple réel :
{
  "name": "ABC Manufacturing",
  "code": "ABC-MFG",
  "description": "Groupe industriel",
  "industry": "Manufacturing",
  "country": "Algeria",
  "timezone": "Africa/Algiers",
  "isActive": true
}
*/
