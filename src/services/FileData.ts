// import { Association } from './../models/association-item.model';//
import { ImageSourcePropType } from 'react-native';
import { FileOthersProperties } from '../models/file-item-model';

// File finder for entities
export class File {

  constructor(readonly id: number,
              readonly fileFind: FileManagement){
  }
  // Associations Files
  static defaultFileFirst(): File {
    return new File(
      1,
      FileManagement.defautFileFirst()
    )
  }
  static defaultFileSecond(): File {
    return new File(
      2,
      FileManagement.defautFileSecond()
    )
  }
  static defaultFileThird(): File {
    return new File(
      3,
      FileManagement.defautFileThird()
    )
  }
  static defaultFile(): File {
    return new File(
      4,
      FileManagement.defautFile()
    )
  }

  // Messages Files

  // static firstMessageFile(): File {
  //   return new File(
  //     3,
  //     FileManagement.defautFirstMessageFile()
  //   )
  // }
  // static secondeMessageFile(): File {
  //   return new File(
  //     4,
  //     FileManagement.defautSecondMessageFile()
  //   )
  // }

}

// File management for entities :
export class FileManagement implements FileOthersProperties {
  url: ImageSourcePropType;
  name: string;

  constructor(
    url: ImageSourcePropType,
    name: string, 
  ){
    this.url = url;
    this.name = name;
  }

  // Associations Files

  static defautFileFirst(){
    return fileFirst;
  }
  static defautFileSecond(){
    return fileSecond;
  }
  static defautFileThird(){
    return fileThird;
  }
  static defautFile(){
    return fileDefault;
  }

  // Messages Files

  // static defautFirstMessageFile(){
  //   return messageFile;
  // }
  // static defautSecondMessageFile(){
  //   return messageFileOne;
  // }

}

// Associations Files

let fileFirst = new FileManagement(
  {uri: "https://cdn.pixabay.com/photo/2016/08/04/09/19/marigold-1568646_960_720.jpg"}, 
  "Image Association first"
)

let fileSecond = new FileManagement(
  {uri: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg"}, 
  "Image Association first"
)

let fileThird = new FileManagement(
  {uri: "https://cdn.pixabay.com/photo/2016/02/19/11/35/book-1209805_960_720.jpg"}, 
  "Image Association first"
)

let fileDefault = new FileManagement(
  {uri: "https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303_960_720.jpg"}, 
  "Image Association default"
)

// Messages Files 

{/*

let messageFile = new FileManagement(
  {uri: " https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg"}, 
  "Image Message default"
)

let messageFileOne = new FileManagement(
  {uri: "https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg"}, 
  "Image Message default"
)

*/}