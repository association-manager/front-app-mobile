import { ImageSourcePropType } from 'react-native';

export class Project {

  constructor(readonly name: string,
              readonly status: string,
              readonly projectType: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              readonly association: Association,
              ) {
  }
  static defaultProjectDetails(): Project {
    return new Project(
      'Projet de présentation par défaut',
      'En cours',
      'Type par défaut',
      'Un grand nombre de centres de distribution alimentaire reste ouvert toute l’année pour assurer une continuité de l’aide alimentaire et, surtout, suivre les familles dans leurs démarches de réinsertion. Partout en France, les Restos se battent pour maintenir leurs locaux au cœur des villes et refusent de s’éloigner des lieux de vie des plus démunis.',
      require('../../assets/default-project.png'),
      Association.commonAssociation(),
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

  static commonAssociation(): Association {
    return new Association(
      'Association par défaut',
      require('../../assets/common-association.jpg'),
      '23 Mars, 2020',
    );
  }
}
