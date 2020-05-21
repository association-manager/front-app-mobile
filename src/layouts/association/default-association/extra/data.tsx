import { ImageSourcePropType } from 'react-native';

export class Association {

  constructor(readonly name: string,
              readonly descriptionTitle: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              ) {
  }
  static defaultAssociation(): Association {
    return new Association(
      'Association par défaut',
      'Type d\'association par défaut',
      'Les Restaurants du cœur – Les Relais du cœur, connus sous le nom de Les Restos du cœur, sont une association loi de 1901 à but non lucratif et reconnue d\'utilité publique, créée en France par Coluche en 19853. Cette association a pour particularité d\'avoir bénéficié du soutien de plusieurs personnalités françaises, dès ses débuts, et d\'une vaste médiatisation, ce qui retient l\'attention de la classe politique, permet d\'établir de nouvelles lois, et attire la participation de nombreux bénévoles.',
      require('../../assets/common-association.jpg'),
    );
  }
}
