import { Association } from './../models/association-item.model';
import { File } from '../services/FileData';

// Displays some information on the page of all associations, then the entire profile of the association
export class AssociationProfile {

  constructor(readonly id: number,
              readonly profileDetail: AssociationProfileDetail){
  }
  static defaultAssociationProfile(): AssociationProfile {
    return new AssociationProfile(
      1,
      AssociationProfileDetail.defautAssociationProfileDetail()
    )
  }
}

export class AssociationProfileDetail {
  constructor(readonly title: string,
              readonly descriptionTitle: string,
              readonly description: string,
              readonly association: AssociationDefaut){
}

  static defautAssociationProfileDetail(): AssociationProfileDetail {
      
    return new AssociationProfileDetail(
      'Association par défaut',
      'Description en quelques mots',
      'Project description \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida id velit tempor efficitur. Nunc molestie scelerisque porttitor.',
      AssociationDefaut.defautAssociation(),
    );
  }

}

// Display this association default  only for association profile page :
export class AssociationDefaut implements Association {
  id: number;
  name: string;
  associationType: string;
  description: string;
  file: File;
  associationProfile: AssociationProfile;
  route: string;

  constructor(
    id: number,
    name: string, 
    associationType: string,
    description: string,
    file: File,
    associationProfile: AssociationProfile,
    route: string
  ){
    this.id = id;
    this.name = name;
    this.associationType = associationType;
    this.description = description;
    this.file = file;
    this.associationProfile = associationProfile;
    this.route = route;
  }

      static defautAssociation(){
          return firsDefaultAssociation;
      }
}

let firsDefaultAssociation = new AssociationDefaut(
  1, 
  "Association par défaut", 
  "Association à but non lucratif",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  File.defaultFile(), 
  AssociationProfile.defaultAssociationProfile(), 
  "Profile de l'association"
)
