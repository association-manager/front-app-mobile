import React, { JSXElementConstructor } from 'react';
import {WebView} from 'react-native-webview';
import adsApi from "../services/ads-api.service";
import Toast from 'react-native-tiny-toast';
import AdsItem, {Ads} from '../models/ads-item.model';

const ADS_URL = "https://advertisement-manager.s3.eu-west-3.amazonaws.com/advertisement_"

export const UserAdsPageScreen = ({ navigation }: any): React.ReactElement => {

    const [iFrame, setIFrame]= React.useState<string>()
    const toastParam: Object = {
        position: Toast.position.CENTER,
        containerStyle:{
          backfaceVisibility: "hidden",
          position: "relative",
          alignContent: "center",
          borderRadius: 20
        },
        textColor: '#FFF',
        duration: 1500
      }

    React.useEffect(()=> {
        const toast = Toast.showLoading('Loading...')
        adsApi.getAnnonces().then(value => {
            setTimeout(()=>{
                const i = Math.round((value.length-1)*Math.random())
                const apiAdsList: AdsItem[]|null = value
                const ads = apiAdsList[i]
                const isVideo = (adsF: Ads) => adsF.video != null
                const findIndexPicture = ads.advertisementFiles.findIndex((adsF: Ads) => adsF.pictureSize === "300x600")
                const findIndexVideo = ads.advertisementFiles.findIndex(isVideo)
                if(findIndexPicture == -1 && findIndexVideo == -1) 
                    return (
                        Toast.hide(toast), 
                        setTimeout(()=> {
                            Toast.show("Annonce(s) indisponible(s)",toastParam)
                            navigation && navigation.navigate('HomeNavigator')
                            ,2500})
                        )
                else {
                    const annonce = findIndexPicture !== -1?
                        ADS_URL + "picture/" + ads.advertisementFiles[findIndexPicture].picture
                        : ADS_URL + "video/" + ads.advertisementFiles[findIndexVideo].video
                    Toast.hide(toast);                    
                    setIFrame(`<iFrame src=${annonce} onClick={()=>${ads.association.website}}/>`)
                    setTimeout(() => {
                        navigation && navigation.navigate('HomeNavigator');
                    },10000)
                }
            },2000)
        })
    }, [])
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html:`${iFrame}`}}
        />
    )
    
}
