import { LayoutItem } from '../../models/layout-item.model';

export interface AuthData extends LayoutItem {
  route: string;
}

export const data: AuthData[] = [
  {
    title: 'Article',
    description: 'Option 1',
    image: require('../../assets/images/splash.png'),
    route: 'Article1',
  },
  {
    title: 'Article',
    description: 'Option 2',
    image: require('../../assets/images/splash.png'),
    route: 'Article2',
  },
  {
    title: 'Article',
    description: 'Option 3',
    image: require('../../assets/images/splash.png'),
    route: 'Article3',
  },
]
