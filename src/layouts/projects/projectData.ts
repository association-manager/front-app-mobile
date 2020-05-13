
import React from 'react';
import { ImageStyle } from 'react-native';
import { AssetDashboardsDarkIcon, AssetDashboardsIcon } from '../../components/icons';
import { ProjectItem } from '../../models/project-item.model';
import { IconElement, IconProps } from '@ui-kitten/components';

export interface ThemedIconProps extends Omit<IconProps, 'name'> {
  light: (style: ImageStyle) => IconElement;
  dark: (style: ImageStyle) => IconElement;
}

export const ThemedIcon = (props: ThemedIconProps): React.ReactElement => {

  const { light, dark, ...iconProps } = props;
  return  dark(iconProps) //themeContext.isDarkMode() ? dark(iconProps) : light(iconProps);
};

export interface ProjectData extends ProjectItem {
  route: string;
}

export const data: ProjectData[] = [
  {
    route: 'projectTasks',
    title: 'ProjectTitle',
    icon: (style: ImageStyle) => React.createElement(ThemedIcon,{ ...style ,light: AssetDashboardsIcon, dark: AssetDashboardsDarkIcon }),
    description:'Project description',
    image: {uri: 'https://cdn.pixabay.com/photo/2015/03/15/08/46/head-674129__480.jpg'}
  },
];