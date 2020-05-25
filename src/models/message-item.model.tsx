import { ImageRequireSource } from 'react-native';
import { File } from '../services/FileData';

export interface MessageItem {
    text: string | null;
    date: string | null;
    reply: boolean;
    attachement: File | null;
  }