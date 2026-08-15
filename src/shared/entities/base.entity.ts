/**
 * ==================================================================================
 * Module      : Base Entity 
 * Description : sert de base pour les colonnes qui sont communes a tous les modules
 * Author      : Arezki CHEKKAL
 * Version     : 1.0.0
 * ==================================================================================
 */

import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date;

}
/*
Pourquoi ! ?

En TypeScript avec strictPropertyInitialization, les propriétés doivent être initialisées.

Or, TypeORM les remplit automatiquement.

Le ! indique à TypeScript :

"Fais-moi confiance, cette propriété sera initialisée."

C'est la pratique recommandée avec NestJS et TypeORM.
*/