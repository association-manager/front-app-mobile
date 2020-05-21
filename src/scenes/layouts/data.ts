import React from 'react';
import { ImageStyle } from 'react-native';
import { ThemedIcon } from '../../components/themed-icon.component';
import {
  AssociationDarkIcon,
  AssociationIcon,
  ProjectTasksListDarkIcon,
  ProjectTasksListIcon,
  ProjectsDarkIcon,
  ProjectsIcon,
  CollaboratorsDarkIcon,
  CollaboratorsIcon
} from '../../components/icons';
import { MenuItem } from '../../model/menu-item.model';

export interface LayoutData extends MenuItem {
  route: string;
}

export const data: LayoutData[] = [
  {
    title: '20 Associations',
    route: 'AssociationList',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssociationIcon, dark: AssociationDarkIcon },
      );
    },
  },
  {
    title: '15 projets',
    route: 'ProjectList',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: ProjectsIcon, dark: ProjectsDarkIcon },
      );
    },
  },
  {
    title: '319 tâches projets',
    route: 'AllProjectTasks',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: ProjectTasksListIcon, dark: ProjectTasksListDarkIcon },
      );
    },
  },
  {
    title: '60 collaborateurs',
    route: 'AppNavigator',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: CollaboratorsIcon, dark: CollaboratorsDarkIcon },
      );
    },
  },
];
