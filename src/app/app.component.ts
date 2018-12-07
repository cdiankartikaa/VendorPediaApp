import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
// import {FormBuilder, FormGroup}
//import { HomePage } from '../pages/home/home';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';
  home = 'HomePage';
  about = 'AboutPage';
  signIn = 'SignInPage';
  signup = 'SignUpPage'
  splashScreen = 'SplashScreen';

  showSplash = true; //show animation

  


  @ViewChild('sideMenu') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl:MenuController) {
    var config = {
    apiKey: "AIzaSyBuircFO_sf_vcemKrwqWIqwXUGibtlUQc",
    authDomain: "vendorpedia-54d53.firebaseapp.com",
    databaseURL: "https://vendorpedia-54d53.firebaseio.com",
    projectId: "vendorpedia-54d53",
    storageBucket: "vendorpedia-54d53.appspot.com",
    messagingSenderId: "947381527762"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
    
      statusBar.styleDefault();
      splashScreen.hide(); //hide static image

      TimeRanges(3000).subscribe(() => this.showSplash = false) //hide animation
    });
  }

  Load(page: string) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
    }

  // untuk form
  // author JuliusTanuwijaya
  // registerForm: FormGroup;
  // post: any;
  // description: string = '';
  // name: string = '';
}

