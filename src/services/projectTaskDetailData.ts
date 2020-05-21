import { ImageSourcePropType } from 'react-native';
import { ProjectTaskListItem } from '../models/project-task-list-item.models';
import moment from 'moment';

export class ProjectTaskDetail {

  constructor(readonly id: number,
              readonly title: string,
              readonly description: string,
              readonly content: string,
              readonly image: ImageSourcePropType,
              readonly startDate: string,
              readonly endDate: string,
              readonly createdAt: string,
              public   progress: ProjectTaskListItem [],
              readonly author: Profile,
              readonly comments: Comment[]) {
  }

  static howToEatHealthy(): ProjectTaskDetail {
    return new ProjectTaskDetail(
      1,
      'How To Eat Healthy',
      'The Most Useful Tips',
      'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
      require('../assets/images/image-background.jpg'),
      moment().utcOffset('+02:00').format('YYYY-MM-DD hh:mm:ss'),
      moment().utcOffset('+02:00').format('YYYY-MM-DD hh:mm:ss'),
      moment().utcOffset('+02:00').format('YYYY-MM-DD hh:mm:ss'),
      [
        ProjectTaskListItem.TO_DO(),
        ProjectTaskListItem.IN_PROGRESS(),
        ProjectTaskListItem.COMPLETED(),
      ],
      Profile.markVolter(),
      [
        Comment.byHubertFranck(),
      ],
    );
  }
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
      require('../assets/images/image-profile.jpg'),
    );
  }

  static hubertFranck(): Profile {
    return new Profile(
      'Hubert',
      'Franck',
      require('../assets/images/image-profile.jpg'),
    );
  }
}

