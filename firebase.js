import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import "@react-native-firebase/auth";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
