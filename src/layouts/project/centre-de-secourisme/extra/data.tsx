import { ImageSourcePropType } from 'react-native';

export class Project {

  constructor(readonly name: string,
              readonly status: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              readonly association: Association,
              ) {
  }

  static centreSecourisme(): Project {
    return new Project(
      'Financer la construction d\'un centre de secourisme et de formation',
      'En cours',
      'Depuis plus de 150 ans, sauver des vies est le cœur de l\’action de la Croix-Rouge. Catastrophes climatiques, attentats, accidents de la route, de santé ou  domestique, nul n’est à l\’abri. Apprendre et savoir les gestes qui sauvent sont une réalité de la vie quotidienne. Aussi, l\’Unité Locale de la Croix Rouge  française d\’Aix-en-Provence et du Pays d’Aix s\’est lancée dans un projet un peu fou : construire de toute pièce un nouveau centre de secourisme et de formation à Aix-en-Provence - La Duranne pour améliorer la formation des secouristes et des populations locales. En effet, nos locaux actuels, pour  former les secouristes et bénévoles, sont vétustes et inadaptés. Ils ne permettent pas d\’apprendre ou de transmettre dans de bonnes conditions les gestes vitaux de secours. Fort de ce constat, nous avons donc décidé de prendre les devants.',
      require('../../assets/centre-de-secoursime.jpg'),
      Association.croixRougeFrancaise(),
    );
  }
}
export class Association {

  constructor(readonly name: string,
              readonly image: ImageSourcePropType,
              readonly createdAt: string) {
  }

  get fullName(): string {
    return `${this.name}`;
  }
  static croixRougeFrancaise(): Association {
    return new Association(
      'Croix-Rouge française',
      require('../../assets/croix-rouge-francaise.jpg'),
      '12 Fév, 2020',
    );
  }
}
