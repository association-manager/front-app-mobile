import { MessageItem } from '../models/message-item.model';
import { File } from './FileData';


export class Message implements MessageItem {
    text: string | null;
    date: string | null;
    reply: boolean;
    attachement: File | null;
    route: string;

    constructor(
        text: string | null,
        date: string | null,
        reply: boolean,
        attachement: File | null,
        route: string
    ){
        this.text = text;
        this.date = date;
        this.reply = reply;
        this.attachement = attachement;
        this.route = route;
    }

    // static firstMessage(){
    //     return messageOne;
    // }
    // static secondMessage(){
    //     return messageTwo;
    // }
    // static ThirdMessage(){
    //     return messageThree;
    // }
    // static fourthMessage(){
    //     return messageFour;
    // }
    // static firthMessage(){
    //     return messageFive;
    // }
    // static sixthMessage(){
    //     return messageSix;
    // }
    // static seventhMessage(){
    //     return messageSeven;
    // }
    // static eighthMessage(){
    //     return messageEight;
    // }
}
    
{/*
const messageOne = new Message(
    "Salut! Comment vas-tu", 
    "4:00 PM",
    false, 
    null, 
    ""
)
const messageTwo = new Message(
    "Salut! Je vais bien. Merci! Et toi?", 
    "4:15 PM",
    true, 
    null, 
    ""
)
const messageThree = new Message(
    "Je vais bien aussi! Merci!", 
    "4:19 PM",
    false, 
    null, 
    ""
)
const messageFour = new Message(
    "Je marche avec mon chien", 
    "4:20 PM",
    false, 
    null, 
    ""
)
const messageFive = new Message(
    null, 
    "4:25 PM",
    false, 
    File.firstMessageFile(), 
    ""
)
const messageSix = new Message(
    null, 
    "4:28 PM",
    false, 
    File.secondeMessageFile(), 
    ""
)
const messageSeven = new Message(
    "Oh! Il est si doux! Puis-je vous rejoindre et marcher ensemble?", 
    "4:30 PM",
    true, 
    null, 
    ""
)
const messageEight = new Message(
    "Oui bien sûr!", 
    "4:35 PM",
    true, 
    null, 
    ""
)
*/}
export const data: Message[] = [
    {
        'text': 'Salut! Comment vas-tu',
        'date': '4:00 PM',
        'reply': false,
        'attachement': null,
        'route': '',
    },
    {
        'text': 'Salut! Je vais bien. Merci! Et toi?',
        'date': '4:15 PM',
        'reply': true,
        'attachement': null,
        'route': '',
    },
    {
        'text': 'Je vais bien aussi! Merci!',
        'date': '4:19 PM',
        'reply': false,
        'attachement': null,
        'route': '',
    },
    {
        'text': 'Je marche avec mon chien',
        'date': '4:20 PM',
        'reply': false,
        'attachement': null,
        'route': '',
    },
    {
        'text': null,
        'date': '4:25 PM',
        'reply': false,
        'attachement': File.firstMessageFile(),
        'route': '',
    },
    {
        'text': null,
        'date': '4:28 PM',
        'reply': false,
        'attachement': File.secondeMessageFile(),
        'route': '',
    },
    {
        'text': 'Oh! Il est si doux! Puis-je vous rejoindre et marcher ensemble?',
        'date': '4:30 PM',
        'reply': true,
        'attachement': null,
        'route': '',
    },
    {
        'text': 'Oui bien sûr!',
        'date': '4:35 PM',
        'reply': true,
        'attachement': null,
        'route': '',
    },
];
