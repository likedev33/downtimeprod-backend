/**
 * ============================================================
 * Module      : Organization
 * Description : Décrire la strucute la de la table organizations 
 * Date        : 2026-08-14
 * Author      : Arezki CHEKKAL
 * Version     : 1.0.0
 * ============================================================
 */
import {
  Column,
  Entity,
  Index,
} from 'typeorm';

import { BaseEntity } from '../../../shared/entities/base.entity';

import { OrganizationStatus } from '../enums/organization-status.enum';
import { OrganizationType } from '../enums/organization-type.enum';

@Entity('organizations')
@Index('UQ_ORGANIZATION_CODE', ['code'], { unique: true })
export class Organization extends BaseEntity {

  /**
   * Functional unique code
   * Example : SONATRACH, PORT_ALGER, CHU_ORAN
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
   * Legal company name
   */
  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  legalName?: string;

  /**
   * Organization type
   */
  @Column({
    type: 'enum',
    enum: OrganizationType,
    default: OrganizationType.COMPANY,
  })
  organizationType!: OrganizationType;

  /**
   * Business sector
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  businessSector?: string;

  /**
   * Company registration number
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  registrationNumber?: string;

  /**
   * Tax identification number
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  taxNumber?: string;

  /**
   * Email address
   */
  @Column({
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  email?: string;

  /**
   * Phone number
   */
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  phone?: string;

  /**
   * Website
   */
  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  website?: string;

  /**
   * Country
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  country?: string;

  /**
   * State / Province
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  state?: string;

  /**
   * City
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  city?: string;

  /**
   * Postal code
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  postalCode?: string;

  /**
   * Full address
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  address?: string;

  /**
   * Default language
   */
  @Column({
    type: 'varchar',
    length: 10,
    default: 'fr',
  })
  language!: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar',
    length: 100,
    default: 'Africa/Algiers',
  })
  timezone!: string;

  /**
   * Currency
   */
  @Column({
    type: 'varchar',
    length: 10,
    default: 'DZD',
  })
  currency!: string;

  /**
   * Organization status
   */
  @Column({
    type: 'enum',
    enum: OrganizationStatus,
    default: OrganizationStatus.ACTIVE,
  })
  status!: OrganizationStatus;

  /**
   * Description
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  // ----------------------------------------------------------------
  // Relations (à activer lors du développement des autres modules)
  // ----------------------------------------------------------------

  // @OneToMany(() => BusinessUnit, businessUnit => businessUnit.organization)
  // businessUnits: BusinessUnit[];

  // @OneToMany(() => Equipment, equipment => equipment.organization)
  // equipments: Equipment[];

  // @OneToMany(() => Contact, contact => contact.organization)
  // contacts: Contact[];

  // @OneToMany(() => Identity, identity => identity.organization)
  // identities: Identity[];

  // @OneToMany(() => Event, event => event.organization)
  // events: Event[];
}

/*
Exemple réel :
{
  "name": "ABC Manufacturing",
  "code": "ABC-MFG",
  "description": "Groupe industriel",
  "businessSector": "Manufacturing",
  "country": "Algeria",
  "timezone": "Africa/Algiers",
  "isActive": true
}
*/

/*
Avant de coder, je préfère que nous validions sa structure.

Identification
Champ	      Type	      Obligatoire	      Remarque
id	        UUID	      Oui	              Clé technique
code	      string	    Oui	              Code métier (ORG-000001)
name	      string	    Oui	              Nom usuel
legalName	  string	    Non	              Raison sociale

Classification
Champ	            Type
organizationType	enum
businessSector	  string

À terme, businessSector pourra devenir un catalogue (BusinessSector).

Informations légales
Champ	              Type
registrationNumber	string
taxNumber	          string

Coordonnées
Champ	              Type
email	              string
phone	              string
website	            string

Adresse
Champ	              Type
country	            string
state	              string
city	              string
postalCode	        string
address	            string

Configuration
Champ	              Type
language	          string
timezone	          string
currency	          string

État
Champ	              Type
status	            OrganizationStatus
description	        string

Audit
Champ	              Type
createdAt	          Date
updatedAt	          Date
deletedAt	          Date
*/