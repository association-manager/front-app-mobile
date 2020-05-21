import { ImageSourcePropType, ImageStyle } from 'react-native';

export interface ProjectItem {
  title: string;
  icon: (style: ImageStyle) => React.ReactElement;
  description: string;
  image: ImageSourcePropType;
}
