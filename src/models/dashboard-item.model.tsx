import React from 'react';
import { ImageStyle, ImageSourcePropType } from 'react-native';

export interface DashboardItem {
  title: string;
  countItem: string;
  image: ImageSourcePropType;
  icon: (style: ImageStyle) => React.ReactElement;
}
