import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

const config = {
   apiKey: "AIzaSyCgBhgYi6wEh0Cnpdr3bUWbe5b1xogOmYM",
   authDomain: "quitit-cfcee.firebaseapp.com",
   databaseURL: "https://quitit-cfcee.firebaseio.com",
   storageBucket: "quitit-cfcee.appspot.com",
   messagingSenderId: "839599544768"
 };

export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config);

    super(firebase.database().ref());
    this.splashTime = 1000;
    this.splashImg = require('../../images/splash.jpg');
    this.loginBG = require('../../images/login.jpg');
  }

  get SplashTime() {
    return this.splashTime;
  }

  get SplashImg() {
    return this.splashImg;
  }

  get LoginBG() {
    return this.loginBG;
  }
}
