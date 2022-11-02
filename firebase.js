// import { initializeApp } from "@react-native-firebase/app";
// import { analytics } from "@react-native-firebase/analytics";
// import "@react-native-firebase/auth";
// import "@react-native-firebase/app";
// import "@react-native-firebase/analytics"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from "@react-native-firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyB--w3MBiy-na5j0BZ9OaWd4HeP6pWHW0U",
  authDomain: "univex-e8fd1.firebaseapp.com",
  databaseURL: "https://univex-e8fd1-default-rtdb.firebaseio.com",
  projectId: "univex-e8fd1",
  storageBucket: "univex-e8fd1.appspot.com",
  messagingSenderId: "354006398146",
  appId: "1:354006398146:web:abbe7a1407bc68f283b75b",
  measurementId: "G-XYMKCEFEC8",
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const app = initializeApp(firebaseConfig);
// const analyticsFirebase = analytics(app);

// const auth = firebase.auth()

// export { auth, app, analyticsFirebase };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics };
