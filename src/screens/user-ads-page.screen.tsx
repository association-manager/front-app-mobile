import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import adsApi from "../services/api-ads.service";
import Toast from 'react-native-tiny-toast';
import AdsItem, {Ads} from '../models/ads-item.model';
import { useSafeArea } from 'react-native-safe-area-context';


const ASSO_URL = " https://association-manager.go.yj.fr/"
const ADS_URL = "https://association-manager.go.yj.fr/annonces/"

export const UserAdsPageScreen = ({ navigation }: any): React.ReactElement => {

    const insets = useSafeArea();
    const [iFrame, setIFrame]= React.useState<string>("")
    const [adsTimer, setAdsTimer]=React.useState<number>(10000)
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
        var annonce: string =""
        adsApi.getAnnonces().then(value => {
            setTimeout(()=>{
                const i = Math.round((value.length-1)*Math.random())
                const apiAdsList: AdsItem[]|null = value
                const ads = apiAdsList[i]
                const isVideo = (adsF: Ads) => adsF.video != null
                const findIndexPicture = ads.advertisementFiles.findIndex((adsF: Ads) => adsF.pictureSize === "300x250")
                const findIndexVideo = ads.advertisementFiles.findIndex(isVideo)
                if(findIndexPicture === -1 && findIndexVideo === -1) 
                    return (
                        Toast.show("Annonce(s) indisponible(s)",toastParam),
                        setTimeout(()=> {
                            Toast.hide
                            navigation && navigation.navigate('HomeNavigator')
                        },2000)
                        )
                else {
                    if(findIndexPicture !== -1){
                        annonce = ADS_URL + ads.iframeLink
                    }else{
                        annonce = ADS_URL + ads.iframeLink
                        setAdsTimer(30*1000)
                    }
                    const iFrameProps = findIndexPicture !== -1? '' : ''                  
                    setIFrame(annonce);
                    setTimeout(() => {
                        navigation && navigation.navigate('HomeNavigator');
                    },adsTimer)
                }
            },2000)
        })
    }, [])
    return (
        <WebView
            style={styles.WebViewStyle && {paddingTop:insets.top, paddingBottom:insets.bottom}}
            originWhitelist={['*']}
            mediaPlaybackRequiresUserAction={false}
            allowsInlineMediaPlayback={true}
            renderLoading={()=><ActivityIndicator/>}
            source={{ uri: `${iFrame}` }}
        >
        </WebView>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      margin: 8,
    },
    controlContainer: {
      borderRadius: 4,
      margin: 8,
      backgroundColor: '#3366FF',
    },
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 40,
      },
  });