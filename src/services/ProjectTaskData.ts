import { ProjectTaskItem} from '../models/project-task-item.model';
import { ProjectTaskListItem } from '../models/project-task-list-item.models';
import {Profile, Comment} from './projectTaskDetailData'; 
import moment from 'moment';


export interface ProjectTaskData extends ProjectTaskItem {
  route: string;
}

export const data: ProjectTaskData[] = [
{ "id" : 1,
  "title" : "Chest",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri: "https://cdn.pixabay.com/photo/2015/03/15/08/46/head-674129__480.jpg"},
  "progress": ProjectTaskListItem.COMPLETED(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"
},
{ "id" : 2,
  "title": "Chest",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri: "https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress": ProjectTaskListItem.TO_DO(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen" 
},
{ "id" : 3,
  "title": "Personalized ProjectTask",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri: "https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress": ProjectTaskListItem.TO_DO(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"
},
{ "id" : 4,
  "title": "Chest",
  "description" : "description",
"content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2016/04/07/22/17/rope-1314964__480.jpg"},
  "progress":ProjectTaskListItem.TO_DO(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen" 
},
{ "id" : 5,  
  "title": "Chest",
  "description" : "description",
"content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress":ProjectTaskListItem.IN_PROGRESS(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"  
},
{ "id" : 6,  
  "title": "Personalized ProjectTask",
  "description" : "description",
"content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2017/10/26/22/25/bridge-2892681__480.jpg"},
  "progress":ProjectTaskListItem.IN_PROGRESS(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"  
},
{ "id" : 7,   
  "title": "Chest",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2013/07/12/19/31/queue-154925__480.png"},
  "progress":ProjectTaskListItem.IN_PROGRESS(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"   
},

{ "id" : 8,  
  "title": "Biceps",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress":ProjectTaskListItem.COMPLETED(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"   
},

{ "id" : 9, 
  "title": "Personalized ProjectTask",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2019/08/05/15/18/people-4386248__480.png"},
  "progress":ProjectTaskListItem.IN_PROGRESS(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"  
},
{ "id" : 10,
  "title": "Chest",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2017/04/27/08/29/sport-2264825__480.jpg"},
  "progress":ProjectTaskListItem.COMPLETED(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"
},
{ "id" : 11, 
  "title": "Biceps",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_1280.jpg"},
  "progress":ProjectTaskListItem.TO_DO(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"
},
{ "id" : 12,
  "title": "Workout",
  "description" : "description",
  "content" : "There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
  "startDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "endDate": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "image" : {uri:"https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828__480.jpg"},
  "progress":ProjectTaskListItem.TO_DO(),
  "createdAt": moment(Date.now()).format('DD/MM/YYYY HH:mm'),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"
},
]
