import { ImageSourcePropType } from 'react-native';
import {ProjectTaskListItem} from './project-task-list-item.models'
import {Profile, Comment} from '../services/projectTaskDetailData';

export interface ProjectTaskItem {
  id: number,
  title: string;
  description: string;
  content: string,
  startDate: string;
  endDate: string;
  image?: ImageSourcePropType;
  progress : ProjectTaskListItem;
  createdAt: string;
  author: Profile;
  comments: Comment[];
}