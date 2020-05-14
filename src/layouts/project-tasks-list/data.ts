import { ProjectTaskItem, Profile, Comment } from '../../models/project-task-item.model';
import { ProjectTaskListItem } from '../../models/project-task-list-item.models';


export interface ProjectTaskData extends ProjectTaskItem {
  route: string;
}

export const data: ProjectTaskData[] = [
{
  "title" : "Chest",
  "duration" : 55,
  "description" : "description",
  "image" : {uri: "https://cdn.pixabay.com/photo/2015/03/15/08/46/head-674129__480.jpg"},
  "progress": ProjectTaskListItem.COMPLETED,
  "date": Date.now.toString(),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"
},
{ 
  "title": "Chest",
  "duration" : 55,
  "description" : "description",
  "image" : {uri: "https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress": ProjectTaskListItem.TO_DO,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen" 
},
{
  "title": "Personalized ProjectTask",
  "duration" : 55,
  "description" : "description",
  "image" : {uri: "https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress": ProjectTaskListItem.TO_DO,
  "date": Date.now.toString(),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"
},
{
  "title": "Chest",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2016/04/07/22/17/rope-1314964__480.jpg"},
  "progress":ProjectTaskListItem.TO_DO,
  "date": Date.now.toString(),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen" 
},

   {   
    "title": "Chest",
    "duration" : 55,
    "description" : "description",
    "image" : {uri:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
    "progress":ProjectTaskListItem.IN_PROGRESS,
    "date": Date.now.toString(),
    "author": Profile.markVolter(),
    "comments": [Comment.byMarkVolter()],
    "route": "ProjectTaskDetailScreen"  
},
{   
  "title": "Personalized ProjectTask",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2017/10/26/22/25/bridge-2892681__480.jpg"},
  "progress":ProjectTaskListItem.IN_PROGRESS,
  "date": Date.now.toString(),
  "author": Profile.markVolter(),
  "comments": [Comment.byMarkVolter()],
  "route": "ProjectTaskDetailScreen"  
},
{    
  "title": "Chest",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2013/07/12/19/31/queue-154925__480.png"},
  "progress":ProjectTaskListItem.IN_PROGRESS,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"   
},

{    
  "title": "Biceps",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_960_720.jpg"},
  "progress":ProjectTaskListItem.COMPLETED,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"   
},

{  
  "title": "Personalized ProjectTask",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2019/08/05/15/18/people-4386248__480.png"},
  "progress":ProjectTaskListItem.IN_PROGRESS,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"  
},
{
  "title": "Chest",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2017/04/27/08/29/sport-2264825__480.jpg"},
  "progress":ProjectTaskListItem.COMPLETED,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"
},
{
  "title": "Biceps",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_1280.jpg"},
  "progress":ProjectTaskListItem.TO_DO,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"
},
{
  "title": "Workout",
  "duration" : 55,
  "description" : "description",
  "image" : {uri:"https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828__480.jpg"},
  "progress":ProjectTaskListItem.TO_DO,
  "date": Date.now.toString(),
  "author": Profile.hubertFranck(),
  "comments":[Comment.byHubertFranck()],
  "route": "ProjectTaskDetailScreen"
},
]
