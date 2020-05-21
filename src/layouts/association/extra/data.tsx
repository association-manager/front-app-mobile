import { ImageSourcePropType } from 'react-native';

export class Association {

  constructor(readonly name: string,
              readonly descriptionTitle: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              ) {
  }

  static lesRestosDuCoeur(): Association {
    return new Association(
      'Les Restos du coeur',
      'Association à but non lucratif',
      'Les Restaurants du cœur – Les Relais du cœur, connus sous le nom de Les Restos du cœur, sont une association loi de 1901 à but non lucratif et reconnue d\'utilité publique, créée en France par Coluche en 19853. Cette association a pour particularité d\'avoir bénéficié du soutien de plusieurs personnalités françaises, dès ses débuts, et d\'une vaste médiatisation, ce qui retient l\'attention de la classe politique, permet d\'établir de nouvelles lois, et attire la participation de nombreux bénévoles.',
      require('../assets/les-restos-du-coeur.jpg'),
    );
  }

  static federationAnglaiseDeFoorball(): Association {
    return new Association(
      'Fédération anglaise de football',
      'Association sportive',
      'La Fédération anglaise de football en anglais : The Football Association (FA) est une association regroupant les clubs de football d\'Angleterre et organisant les compétitions nationales (championnat amateurs, professionnels et Coupe d\'Angleterre) et les matchs internationaux de la sélection d\'Angleterre. Elle organise également les compétitions des dépendances de la Couronne d\'Angleterre, sur l\'Île de Man, à Guernesey et à Jersey. Formée en 1863, elle est la plus ancienne association nationale de football au Monde et joua un rôle important dans la mise en place des règles de son sport. Son siège est situé à Londres, à Wembley, après avoir été à Soho Square avant 2009.',
      require('../assets/federation-anglaise-de-football.jpg'),
    );
  }

  static croixRougeFrancaise(): Association {
    return new Association(
      'Croix-Rouge française',
      'Société nationale du Mouvement international de la Croix-Rouge et du Croissant-Rouge',
      'La Croix-Rouge française (CRF) est une association d\'aide humanitaire française fondée en 1864. Elle a pour objectif de venir en aide aux personnes en difficulté en France et à l\'étranger. Ses missions fondamentales sont l\'urgence, le secourisme, l\'action sociale, la formation, la santé et l\'action internationale. Reconnue d\'utilité publique depuis 1945, la Croix-Rouge française est l\'une des 190 sociétés nationales du Mouvement international de la Croix-Rouge et du Croissant-Rouge. Elle compte plus de 60 571 bénévoles et 18 000 salariés.',
      require('../assets/croix-rouge-francaise.jpg'),
    );
  }
}
