import React from 'react';

export default interface AdsItem {
    id: number;
    title: string;
    details: string;
    categories: string;
    status: string;
    createdAt: string;
    advertisementFiles: Ads[];
    audience:string;
    appWebMobile:string|null;
    priority:number|null;
    association: AdsAsso;
    iframeLink:string;
}
export interface Ads {
    id:number;
    picture: string|null;
    video: string|null;
    pictureSize:string;
    logo:ImageBitmapSource;
}

interface AdsAsso {
    id: number;
    name: string;
    associationType: string,
    website: string;
}