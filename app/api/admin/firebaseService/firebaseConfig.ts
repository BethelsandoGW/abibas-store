import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDA7GeAbZEJulevo2mRQ03_WjWDaiwStoc",
    authDomain: "abibas-store-411406.firebaseapp.com",
    projectId: "abibas-store-411406",
    storageBucket: "abibas-store-411406.appspot.com",
    messagingSenderId: "483870740920",
    appId: "1:483870740920:web:c51afbad48337706ccbf4d",
    measurementId: "G-R5C7MWQ9CL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };