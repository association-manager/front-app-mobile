import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

/**
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#3rd-party-icon-packages
 */
const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({ animation, ...style }) => (
    <Image style={style} source={source}/>
  ),
});

export const AppIconsPack = {
  name: 'app',
  icons: {
    'auth': IconProvider(require('../assets/images/icon-auth.png')),
    'auth-dark': IconProvider(require('../assets/images/icon-auth-dark.png')),
    'social': IconProvider(require('../assets/images/icon-social.png')),
    'social-dark': IconProvider(require('../assets/images/icon-social-dark.png')),
    'messaging': IconProvider(require('../assets/images/icon-messaging.png')),
    'messaging-dark': IconProvider(require('../assets/images/icon-messaging-dark.png')),
    'dashboards': IconProvider(require('../assets/images/icon-dashboards.png')),
    'dashboards-dark': IconProvider(require('../assets/images/icon-dashboards-dark.png')),
    'projects': IconProvider(require('../assets/images/icon-projects.png')),
    'projects-dark': IconProvider(require('../assets/images/icon-projects-dark.png')),
    'tasks-list': IconProvider(require('../assets/images/icon-tasks-list-dark.png')),
    'tasks-list-dark': IconProvider(require('../assets/images/icon-tasks-list-dark.png')),
    'collaborators': IconProvider(require('../assets/images/icon-collaborators-count.png')),
    'collaborators-dark': IconProvider(require('../assets/images/icon-collaborators-count-dark.png')),
    'association': IconProvider(require('../assets/images/icon-association.png')),
    'association-dark': IconProvider(require('../assets/images/icon-association-dark.png')),
  },
};
