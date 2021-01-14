// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };
const firebaseConfig = {
  apiKey: "AIzaSyDugdV92PcFLP0DF0YAqWiehovNPkkwuUc",
  authDomain: "book-project-15a8c.firebaseapp.com",
  projectId: "book-project-15a8c",
  storageBucket: "book-project-15a8c.appspot.com",
  messagingSenderId: "1039399168891",
  appId: "1:1039399168891:web:8f50db8d00422c8032abde",
  measurementId: "G-KZLD028XVG"
};

export const environment = {

  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
