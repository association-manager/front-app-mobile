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
    association: AdsAsso;
}
export interface Ads {
    id:number;
    picture: string|null;
    video: string|null;
    pictureSize:string;
}

interface AdsAsso {
    id: number;
    name: string;
    associationType: string,
    website: string;
}