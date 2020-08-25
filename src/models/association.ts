export interface Association {
  '@id'?: string;
  name: string;
  dataUsageAgreement?: boolean;
  associationType?: string;
  phoneNumber?: string;
  mobile?: string;
  website?: string;
  email: string;
  firstName: string;
  lastName: string;
  assemblyConstituveDate: Date;
  foundedAt?: Date;
  createdAt?: Date;
  workGroups?: string[];
  addresses?: string[];
  members?: string[];
  networksSocialLinks?: string[];
  associationProfile?: string;
  plannings?: string[];
  transactions?: string[];
  fileManagers?: string[];
  logo?: string;
  id?: string;
}
