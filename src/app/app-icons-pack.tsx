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

const IconProviderLess = (source: ImageRequireSource) => ({
  toReactElement: () => (
    <Image style={{
      "width": 20,
      "height": 20,
      "marginHorizontal": 8,
      "tintColor": "#8F9BB3"
    }} source={source}/>
  ),
});

// With customs icons import
export const AppIconsPack = {
  name: 'app',
  icons: {
    'auth': IconProvider(require('../assets/images/icon-auth.png')),
    'auth-dark': IconProvider(require('../assets/images/icon-auth-dark.png')),
    'messaging': IconProvider(require('../assets/images/icon-messaging.png')),
    'messaging-dark': IconProvider(require('../assets/images/icon-messaging-dark.png')),
    'dashboard': IconProviderLess(require('../assets/images/icon-dashboard.png')),
    'dashboard-dark': IconProvider(require('../assets/images/icon-dashboard-dark.png')),
    'association-profile': IconProvider(require('../assets/images/association-manager.png')),
    'association-profile-dark': IconProvider(require('../assets/images/association-manager-dark.png')),
    'projects': IconProvider(require('../assets/images/icon-projects.png')),
    'projects-dark': IconProvider(require('../assets/images/icon-projects-dark.png')),
    'tasks-list': IconProvider(require('../assets/images/icon-tasks-list-dark.png')),
    'tasks-list-dark': IconProvider(require('../assets/images/icon-tasks-list-dark.png')),
    'collaborators': IconProvider(require('../assets/images/icon-collaborators-count.png')),
    'collaborators-dark': IconProvider(require('../assets/images/icon-collaborators-count-dark.png')),
    'association': IconProvider(require('../assets/images/icon-association.png')),
    'association-dark': IconProvider(require('../assets/images/icon-association-dark.png')),
    'autocomplete': IconProvider(require('../assets/images/icon-autocomplete.png')),
    'autocomplete-dark': IconProvider(require('../assets/images/icon-autocomplete-dark.png')),
    'avatar': IconProvider(require('../assets/images/icon-avatar.png')),
    'avatar-dark': IconProvider(require('../assets/images/icon-avatar-dark.png')),
    'bottom-navigation': IconProvider(require('../assets/images/icon-bottom-navigation.png')),
    'bottom-navigation-dark': IconProvider(require('../assets/images/icon-bottom-navigation-dark.png')),
    'button': IconProvider(require('../assets/images/icon-button.png')),
    'button-dark': IconProvider(require('../assets/images/icon-button-dark.png')),
    'button-group': IconProvider(require('../assets/images/icon-button-group.png')),
    'button-group-dark': IconProvider(require('../assets/images/icon-button-group-dark.png')),
    'calendar': IconProvider(require('../assets/images/icon-calendar.png')),
    'calendar-dark': IconProvider(require('../assets/images/icon-calendar-dark.png')),
    'card': IconProvider(require('../assets/images/icon-card.png')),
    'card-dark': IconProvider(require('../assets/images/icon-card-dark.png')),
    'check-box': IconProvider(require('../assets/images/icon-checkbox.png')),
    'check-box-dark': IconProvider(require('../assets/images/icon-checkbox-dark.png')),
    'datepicker': IconProvider(require('../assets/images/icon-datepicker.png')),
    'datepicker-dark': IconProvider(require('../assets/images/icon-datepicker-dark.png')),
    'drawer': IconProvider(require('../assets/images/icon-drawer.png')),
    'drawer-dark': IconProvider(require('../assets/images/icon-drawer-dark.png')),
    'icon': IconProvider(require('../assets/images/icon-icon.png')),
    'icon-dark': IconProvider(require('../assets/images/icon-icon-dark.png')),
    'input': IconProvider(require('../assets/images/icon-input.png')),
    'input-dark': IconProvider(require('../assets/images/icon-input-dark.png')),
    'list': IconProvider(require('../assets/images/icon-list.png')),
    'list-dark': IconProvider(require('../assets/images/icon-list-dark.png')),
    'menu': IconProvider(require('../assets/images/icon-menu.png')),
    'menu-dark': IconProvider(require('../assets/images/icon-menu-dark.png')),
    'modal': IconProvider(require('../assets/images/icon-modal.png')),
    'modal-dark': IconProvider(require('../assets/images/icon-modal-dark.png')),
    'overflow-menu': IconProvider(require('../assets/images/icon-overflow-menu.png')),
    'overflow-menu-dark': IconProvider(require('../assets/images/icon-overflow-menu-dark.png')),
    'popover': IconProvider(require('../assets/images/icon-popover.png')),
    'popover-dark': IconProvider(require('../assets/images/icon-popover-dark.png')),
    'radio': IconProvider(require('../assets/images/icon-radio.png')),
    'radio-dark': IconProvider(require('../assets/images/icon-radio-dark.png')),
    'select': IconProvider(require('../assets/images/icon-select.png')),
    'select-dark': IconProvider(require('../assets/images/icon-select-dark.png')),
    'spinner': IconProvider(require('../assets/images/icon-spinner.png')),
    'spinner-dark': IconProvider(require('../assets/images/icon-spinner-dark.png')),
    'tab-view': IconProvider(require('../assets/images/icon-tab-view.png')),
    'tab-view-dark': IconProvider(require('../assets/images/icon-tab-view-dark.png')),
    'text': IconProvider(require('../assets/images/icon-text.png')),
    'text-dark': IconProvider(require('../assets/images/icon-text-dark.png')),
    'toggle': IconProvider(require('../assets/images/icon-toggle.png')),
    'toggle-dark': IconProvider(require('../assets/images/icon-toggle-dark.png')),
    'tooltip': IconProvider(require('../assets/images/icon-tooltip.png')),
    'tooltip-dark': IconProvider(require('../assets/images/icon-tooltip-dark.png')),
    'top-navigation': IconProvider(require('../assets/images/icon-top-navigation.png')),
    'top-navigation-dark': IconProvider(require('../assets/images/icon-top-navigation-dark.png')),
  },
};
