import { ImageSourcePropType } from 'react-native';

export class Project {

  constructor(readonly name: string,
              readonly status: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              readonly association: Association,
              ) {
  }
  static alimentationPourTous(): Project {
    return new Project(
      'Alimentations pour tous',
      'En cours',
      'Un grand nombre de centres de distribution alimentaire reste ouvert toute l’année pour assurer une continuité de l’aide alimentaire et, surtout, suivre les familles dans leurs démarches de réinsertion. Partout en France, les Restos se battent pour maintenir leurs locaux au cœur des villes et refusent de s’éloigner des lieux de vie des plus démunis.',
      require('../../assets/alimentation-pour-tous.jpg'),
      Association.lesRestosDuCoeur(),
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

  static lesRestosDuCoeur(): Association {
    return new Association(
      'Les Restos du coeur',
      require('../../assets/les-restos-du-coeur.jpg'),
      '23 Mars, 2020',
    );
  }
}
