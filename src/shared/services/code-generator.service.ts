import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeGeneratorService {

  generate(prefix: string, sequence: number): string {

    return `${prefix}-${sequence
      .toString()
      .padStart(6, '0')}`;

  }

}

/*
Exemple :

generate('ORG', 15);

résultat

ORG-000015
Pourquoi une version simple ?

Parce qu'au début :

    nous n'avons pas encore Redis ;
    pas encore de séquence PostgreSQL ;
    pas encore de transactions.

Plus tard nous améliorerons ce service.
*/