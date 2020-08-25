export interface User {
  '@id'?: string;
  email: string;
  roles?: any;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  mobile?: string;
  sex?: string;
  fileManagers?: string[];
  addresses?: string[];
  id?: string;
}
