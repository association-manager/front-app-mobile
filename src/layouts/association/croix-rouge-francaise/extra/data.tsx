import { ImageSourcePropType } from 'react-native';

export class Association {

  constructor(readonly name: string,
              readonly descriptionTitle: string,
              readonly description: string,
              readonly image: ImageSourcePropType,
              ) {
  }
  static croixRougeFrancaise(): Association {
    return new Association(
      'Croix-Rouge française',
      'Société nationale du Mouvement international de la Croix-Rouge et du Croissant-Rouge',
      'La Croix-Rouge française (CRF) est une association d\'aide humanitaire française fondée en 1864. Elle a pour objectif de venir en aide aux personnes en difficulté en France et à l\'étranger. Ses missions fondamentales sont l\'urgence, le secourisme, l\'action sociale, la formation, la santé et l\'action internationale. Reconnue d\'utilité publique depuis 1945, la Croix-Rouge française est l\'une des 190 sociétés nationales du Mouvement international de la Croix-Rouge et du Croissant-Rouge. Elle compte plus de 60 571 bénévoles et 18 000 salariés.',
      require('../../assets/croix-rouge-francaise.jpg'),
    );
  }
}
