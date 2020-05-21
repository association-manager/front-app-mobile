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
      require('../assets/centre-de-secoursime.jpg'),
      Association.croixRougeFrancaise(),
    );
  }

  static coupeAngleterredeFootball(): Project {
    return new Project(
      'Coupe d\'Angleterre de football',
      'Association sportive',
      'La Coupe d\'Angleterre de football, officiellement Football Association Challenge Cup ou The Emirates FA Cup, est une compétition de football à élimination directe, fondée en 1871. La FA Cup est la doyenne des compétitions de football dans le monde. Elle est disputée par les clubs anglais appartenant à une élite élargie et les clubs gallois évoluant en Premier League. Son règlement a pour particularité qu\'en cas d\'égalité à la fin du temps réglementaire, le match est rejoué, excepté en demi-finale et en finale. Le vainqueur de la compétition dispute le Community Shield contre le vainqueur du Championnat d\'Angleterre et obtient sa qualification pour l\'édition suivante de la Ligue Europa.',
      require('../assets/coupe-angleterre-de-football.jpg'),
      Association.federationAnglaiseDeFootball(),
    );
  }

  static alimentationPourTous(): Project {
    return new Project(
      'Alimentation pour tous',
      'En cours',
      'Un grand nombre de centres de distribution alimentaire reste ouvert toute l’année pour assurer une continuité de l’aide alimentaire et, surtout, suivre les familles dans leurs démarches de réinsertion. Partout en France, les Restos se battent pour maintenir leurs locaux au cœur des villes et refusent de s’éloigner des lieux de vie des plus démunis.',
      require('../assets/alimentation-pour-tous.jpg'),
      Association.lesRestosDuCoeur(),
    );
  }
}
export class Association {

  constructor(readonly name: string,
              readonly image: ImageSourcePropType,
              readonly createdAt: string,) {
  }

  get fullName(): string {
    return `${this.name}`;
  }

  static lesRestosDuCoeur(): Association {
    return new Association(
      'Les Restos du coeur',
      require('../assets/les-restos-du-coeur.jpg'),
      '23 Mars, 2020',
    );
  }

  static federationAnglaiseDeFootball(): Association {
    return new Association(
      'Fédération anglaise de football',
      require('../assets/federation-anglaise-de-football.jpg'),
      '15 Dec, 2019',
    );
  }

  static croixRougeFrancaise(): Association {
    return new Association(
      'Croix-Rouge française',
      require('../assets/croix-rouge-francaise.jpg'),
      '12 Fév, 2020',
    );
  }
}
