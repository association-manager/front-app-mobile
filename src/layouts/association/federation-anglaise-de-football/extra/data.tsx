import { ImageSourcePropType } from 'react-native';

export class Association {

  constructor(readonly name: string,
              readonly descriptionTitle: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              ) {
  }
  static federationAnglaiseDeFootball(): Association {
    return new Association(
      'Fédération anglaise de football',
      'Association sportive',
      'La Fédération anglaise de football en anglais : The Football Association (FA) est une association regroupant les clubs de football d\'Angleterre et organisant les compétitions nationales (championnat amateurs, professionnels et Coupe d\'Angleterre) et les matchs internationaux de la sélection d\'Angleterre. Elle organise également les compétitions des dépendances de la Couronne d\'Angleterre, sur l\'Île de Man, à Guernesey et à Jersey. Formée en 1863, elle est la plus ancienne association nationale de football au Monde et joua un rôle important dans la mise en place des règles de son sport. Son siège est situé à Londres, à Wembley, après avoir été à Soho Square avant 2009.',
      require('../../assets/federation-anglaise-de-football.jpg'),
    );
  }
}
