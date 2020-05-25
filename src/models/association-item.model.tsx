
import {AssociationProfile} from '../services/associationProfileData'; 
import { File } from '../services/FileData';

export interface Association {
  id: number;
  name: string;
  associationType: string;
  description: string;
  file: File;
  associationProfile: AssociationProfile;
}

