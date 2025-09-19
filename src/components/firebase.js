// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB-x66fvhFKbvYVgZekleH9u1Tai8stE4E",
  authDomain: "brainbot-8d0b5.firebaseapp.com",
  databaseURL: "https://brainbot-8d0b5-default-rtdb.firebaseio.com",
  projectId: "brainbot-8d0b5",
  storageBucket: "brainbot-8d0b5.firebasestorage.app",
  messagingSenderId: "1017628838910",
  appId: "1:1017628838910:web:ee3eb53e7c3c6168f08eaf",
  measurementId: "G-K9GXN96QL9"
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