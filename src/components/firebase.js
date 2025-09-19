// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDlTLCfiS8im2j8100wDsb5AUwxhLi-zdI",
  authDomain: "brainbot-207a8.firebaseapp.com",
  databaseURL: "https://brainbot-207a8-default-rtdb.firebaseio.com",
  projectId: "brainbot-207a8",
  storageBucket: "brainbot-207a8.firebasestorage.app",
  messagingSenderId: "374783125240",
  appId: "1:374783125240:web:cf0621dbd27f784830bd0d",
  measurementId: "G-85QM47JDP2"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCvi7MhE_qgLgkgPr3JUT8BZXMYfGTwwso",
//   authDomain: "metamodal-20380.firebaseapp.com",
//   databaseURL: "https://metamodal-20380-default-rtdb.firebaseio.com",
//   projectId: "metamodal-20380",
//   storageBucket: "metamodal-20380.firebasestorage.app",
//   messagingSenderId: "442000129225",
//   appId: "1:442000129225:web:88715530d07ecca9106118",
//   measurementId: "G-XJWCJNEXTR"
// };

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
const database = getDatabase(cong);
export { database, ref, set, push, get };
export default cong;