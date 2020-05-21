import { ImageSourcePropType } from 'react-native';
import {ProjectTaskListItem} from './project-task-list-item.models';

export interface ProjectTaskItem {
  title: string;
  description: string;
  duration: number;
  image?: ImageSourcePropType;
  progress: ProjectTaskListItem;
  date: string;
  author: Profile;
  comments: Comment[];
}
export class Comment {

  constructor(readonly text: string,
              readonly date: string,
              readonly author: Profile,
              readonly comments: Comment[]) {
  }

  static byHubertFranck(): Comment {
    return new Comment(
      'This very useful information for me Thanks for your article!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [
        Comment.byMarkVolter(),
      ],
    );
  }

  static byMarkVolter(): Comment {
    return new Comment(
      'Thanks!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [],
    );
  }

}

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter(): Profile {
    return new Profile(
      'Mark',
      'Volter',
      require('../assets/images/image-app-icon.png'),
    );
  }

  static hubertFranck(): Profile {
    return new Profile(
      'Hubert',
      'Franck',
      require('../assets/images/image-app-icon.png'),
    );
  }
}
