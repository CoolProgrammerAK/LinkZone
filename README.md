## LinkZone
Linkzone-The only link you will ever need.
## Features

* Technology used:
  * React (create-react-app)
  * Firebase
  * React-router
  * React-Redux-Firebase
* Features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Protected Routes with Authorization
  * Social Logins with Google and Facebook
  * Linking of Social Logins on Account dashboard
  * Database with Users
  * Theme Changing features
  * Image uploading into firebase storage

## Installation

* `git clone git@github.com:the-road-to-react-with-firebase/react-firebase-authentication.git`
* `cd react-firebase-authentication`
* `npm install`
* `npm start`
* visit http://localhost:3000

Get an overview of Firebase, how to create a project, what kind of features Firebase offers, and how to navigate through the Firebase project dashboard in this [visual tutorial for Firebase](https://www.robinwieruch.de/firebase-tutorial/).

### React
   To learn React, check out the [React documentation](https://reactjs.org/).
   
### Firebase Configuration

* copy/paste your configuration from your Firebase project's dashboard into these file
  * *src/services/firebase.js* file
 

### Activate Sign-In Methods

![firebase-enable-google-social-login_640](https://user-images.githubusercontent.com/2479967/49687774-e0a31e80-fb42-11e8-9d8a-4b4c794134e6.jpg)

* Email/Password
* [Google](https://www.robinwieruch.de/react-firebase-social-login/)
* [Facebook](https://www.robinwieruch.de/firebase-facebook-login/)
* [Troubleshoot](https://www.robinwieruch.de/react-firebase-social-login/)

### Activate Sign-In Methods

![firebase-enable-google-social-login_640](https://user-images.githubusercontent.com/2479967/49687774-e0a31e80-fb42-11e8-9d8a-4b4c794134e6.jpg)

* Email/Password
* [Google](https://www.robinwieruch.de/react-firebase-social-login/)
* [Facebook](https://www.robinwieruch.de/firebase-facebook-login/)
* [Troubleshoot](https://www.robinwieruch.de/react-firebase-social-login/)

### Security Rules for Cloud Firestore

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone on the internet to view, edit, and delete
    // all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // your app will lose access to your Firestore database
    match /links/{links} {
      allow read,write:if request.auth.uid!=null;
      
    }
      match /users/{links} {
      allow create;
      allow read:if request.auth.uid!=null;
      allow write:if request.auth.uid==links;
      }
  }
}
```
### Security Rules for Firebase Storage

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write:if request.auth!=null
    }
  }
}
```
