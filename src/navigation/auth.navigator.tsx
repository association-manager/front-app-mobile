import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SignIn4Screen } from '../scenes/auth/sign-in-4.component';
import { ForgotPasswordScreen } from '../scenes/auth/forgot-password.component';
import { HomeNavigator } from './home.navigator';
import { UserProfileEdit } from '../scenes/user/user-profile.component';
import { Chat2Screen } from '../scenes/messaging/chat-2.component';
import { AssociationListScreen } from '../scenes/associations/association-list.component';
import { ProjectListScreen } from '../scenes/projects/project-list.component';
import { DefaultProjectDetailsScreen } from '../scenes/projects/details/default-project-details.component';
import { DefaultAssociationScreen } from '../scenes/associations/profiles/default-association.component';
import { LesRestosDuCoeurScreen } from '../scenes/associations/profiles/les-restos-du-coeur.component';
import { CroixRougeFrancaiseScreen } from '../scenes/associations/profiles/croix-rouge-francaise.component';
import { FederationAnglaiseDeFootballScreen } from '../scenes/associations/profiles/federation-anglaise-de-football.component';
import { CoupeAngleterreDeFootballScreen } from '../scenes/projects/details/coupe-angleterre-de-football';
import { AlimentationPourTousScreen } from '../scenes/projects/details/alimentation-pour-tous.component';
import { CentreDeSecourismeScreen } from '../scenes/projects/details/centre-de-secourisme';
import { ProjectTasksScreen } from '../scenes/project-tasks/project-tasks.component';
import { ProjectTaskEditFormScreen } from './../scenes/auth/project-task-form.component';
import { AllProjectTasksScreen } from '../scenes/project-tasks/all-project-tasks.component';
import { ProjectListByAssociationScreen } from './../scenes/projects/project-list-screen-by-association.component';



const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='SignIn4' component={SignIn4Screen}/>
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/> 
    <Stack.Screen name='AppNavigator' component={HomeNavigator}/>
    <Stack.Screen name='UserProfileEdit' component={UserProfileEdit}/>
    <Stack.Screen name='Chat2' component={Chat2Screen}/>
    <Stack.Screen name='AssociationList' component={AssociationListScreen}/>
    <Stack.Screen name='ProjectList' component={ProjectListScreen}/>
    <Stack.Screen name='DefaultProjectDetails' component={DefaultProjectDetailsScreen}/>
    <Stack.Screen name='DefaultAssociation' component={DefaultAssociationScreen}/>
    <Stack.Screen name='LesRestosDuCoeur' component={LesRestosDuCoeurScreen}/>
    <Stack.Screen name='CroixRougeFrancaise' component={CroixRougeFrancaiseScreen}/>
    <Stack.Screen name='FederationAnglaiseDeFootball' component={FederationAnglaiseDeFootballScreen}/>
    <Stack.Screen name='CoupeAngleterreDeFootball' component={CoupeAngleterreDeFootballScreen}/>
    <Stack.Screen name='AlimentationPourTous' component={AlimentationPourTousScreen}/>
    <Stack.Screen name='CentreDeSecourisme' component={CentreDeSecourismeScreen}/>
    <Stack.Screen name='ProjectTasks' component={ProjectTasksScreen}/>
    <Stack.Screen name='AllProjectTasks' component={AllProjectTasksScreen}/>
    <Stack.Screen name='ProjectTaskEditForm' component={ProjectTaskEditFormScreen}/>
    <Stack.Screen name='ProjectListByAssociation' component={ProjectListByAssociationScreen}/>
  </Stack.Navigator>
);
