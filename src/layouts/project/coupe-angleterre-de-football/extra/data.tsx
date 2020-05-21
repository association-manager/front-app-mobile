import { ImageSourcePropType } from 'react-native';

export class Project {

  constructor(readonly name: string,
              readonly status: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              readonly association: Association,
              ) {
  }
  static coupeAngleterredeFootball(): Project {
    return new Project(
      'Coupe d\'Angleterre de football',
      'Association sportive',
      'La Coupe d\'Angleterre de football, officiellement Football Association Challenge Cup ou The Emirates FA Cup, est une compétition de football à élimination directe, fondée en 1871. La FA Cup est la doyenne des compétitions de football dans le monde. Elle est disputée par les clubs anglais appartenant à une élite élargie et les clubs gallois évoluant en Premier League. Son règlement a pour particularité qu\'en cas d\'égalité à la fin du temps réglementaire, le match est rejoué, excepté en demi-finale et en finale. Le vainqueur de la compétition dispute le Community Shield contre le vainqueur du Championnat d\'Angleterre et obtient sa qualification pour l\'édition suivante de la Ligue Europa.',
      require('../../assets/coupe-angleterre-de-football.jpg'),
      Association.federationAnglaiseDeFootball(),
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
  static federationAnglaiseDeFootball(): Association {
    return new Association(
      'Fédération anglaise de football',
      require('../../assets/federation-anglaise-de-football.jpg'),
      '15 Dec, 2019',
    );
  }
}
