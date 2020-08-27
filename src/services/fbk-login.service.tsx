
import React from 'react'
import FBSDK from 'react-native-fbsdk'

const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK

class FacebookService {
  requestManager: FBSDK.GraphRequestManager
  constructor() {
    this.requestManager = new GraphRequestManager()
  }

  makeLoginButton(callback: (arg0: string) => void) {
    return (
      <LoginButton
        permissions={["public_profile"]}
        onLoginFinished={(error, result) => {
          if (error) {

          } else if (result.isCancelled) {

          } else {
            AccessToken.getCurrentAccessToken()
              .then((data: any) => {
                callback(data.accessToken)
              })
              .catch(error => {
                console.log(error)
              })
          }
        }} />
    )
  }

  makeLogoutButton(callback: () => void) {
    return (
      <LoginButton onLogoutFinished={() => {
        callback()
      }} />
    )
  }

  async fetchProfile(callback: any) {
    return new Promise((resolve, reject) => {
      const request = new GraphRequest(
        '/me',
        null,
        (error, result : any) => {
          if (result) {
            const profile: any = result
            profile.avatar = `https://graph.facebook.com/${result.id}/picture`
            resolve(profile)
          } else {
            reject(error)
          }
        }
      )

      this.requestManager.addRequest(request).start()
    })
  }
}

export const facebookService = new FacebookService()