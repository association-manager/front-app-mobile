import { ProjectTaskItem } from '../../models/project-task-item.model';

export interface ProjectTaskData extends ProjectTaskItem {
  route: string;
}

export const data: ProjectTaskData[] = [
  {
    title: 'Task1',
    description: 'Option 1',
    image: require('../../assets/images/splash.png'),
    route: 'ProjectTaskDetailScreen',
  },
  {
    title: 'Task2',
    description: 'Option 2',
    image: require('../../assets/images/splash.png'),
    route: 'ProjectTaskDetailScreen',
  },
  {
    title: 'Task3',
    description: 'Option 3',
    image: require('../../assets/images/splash.png'),
    route: 'ProjectTaskDetailScreen',
  },
]
