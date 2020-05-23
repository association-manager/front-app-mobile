import { Association } from '../models/association-item.model';
import { AssociationProfile } from './associationProfileData';
import { File } from './FileData';

export interface AssociationData extends Association {
  route: string;
}

export const data: AssociationData[] = [
  {
    "id": 1,
    "route": "Profile",
    "name": "Association first",
    "associationType": "Association à but non lucratif",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "file": File.defaultFileFirst(),
    "associationProfile": AssociationProfile.defaultAssociationProfile(),
  },
  {
    "id": 2,
    "route": "Profile",
    "name": "Association second",
    "associationType": "Association sprotive",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "file": File.defaultFileSecond(),
    "associationProfile": AssociationProfile.defaultAssociationProfile(),
  },
  {
    "id": 3,
    "route": "Profile",
    "name": "Association third",
    "associationType": "Association culturelle",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "file": File.defaultFileThird(),
    "associationProfile": AssociationProfile.defaultAssociationProfile(),
  },
];



