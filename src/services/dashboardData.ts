import React from 'react';
import { DashboardItem} from '../models/dashboard-item.model';
import { ImageStyle } from 'react-native';
import { IconElement, IconProps } from '@ui-kitten/components';
import {
  AssociationDarkIcon,
  AssociationIcon,
  ProjectTasksListDarkIcon,
  ProjectTasksListIcon,
  ProjectsDarkIcon,
  ProjectsIcon,
  CollaboratorsDarkIcon,
  CollaboratorsIcon,
} from '../components/icons';

export interface ThemedIconProps extends Omit<IconProps, 'name'> {
  light: (style: ImageStyle) => IconElement;
  dark: (style: ImageStyle) => IconElement;
}

export const ThemedIcon = (props: ThemedIconProps): React.ReactElement => {

  const { light, dark, ...iconProps } = props;
  return  dark(iconProps)
};

export interface DashboardData extends DashboardItem {
  route: string;
}

const pictureUri = {uri: 'https://cdn.pixabay.com/photo/2019/05/30/17/53/cardiac-pulse-4240338_960_720.jpg'};

function returnCustomIcon(iconParamLight:any, iconParamDark:any){
  return (style: ImageStyle)  => React.createElement(ThemedIcon,{ ...style, light: iconParamLight, dark: iconParamDark },)  
}


export const data: DashboardData[] = [
  {
    countItem: '20',
    title : "Associations",
    image: pictureUri,
    icon: returnCustomIcon(AssociationIcon, AssociationDarkIcon),
    route: 'Tableau de bord'
  },
  { 
    countItem: '15',
    title: "projets",
    image: pictureUri,
    icon: returnCustomIcon(ProjectsIcon, ProjectsDarkIcon),
    route: 'Tableau de bord'
  },
  {
    countItem: '319',
    title: "Tâches projets",
    "image": pictureUri,
    icon: returnCustomIcon(ProjectTasksListIcon, ProjectTasksListDarkIcon),
    route: 'Tableau de bord'
    },
  {
    countItem: '60',
    title: 'Collaborateurs',
    image: pictureUri,
    icon: returnCustomIcon(CollaboratorsIcon, CollaboratorsDarkIcon),
    route: 'Tableau de bord'
    },
  ]
  