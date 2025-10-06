// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBxx7CtxuSBW6hcCK6R9OSFOvItMRykvzI",
  authDomain: "brainbotai-9b32e.firebaseapp.com",
  databaseURL: "https://brainbotai-9b32e-default-rtdb.firebaseio.com",
  projectId: "brainbotai-9b32e",
  storageBucket: "brainbotai-9b32e.firebasestorage.app",
  messagingSenderId: "880636780931",
  appId: "1:880636780931:web:a6623a4308dcd172f996b6",
  measurementId: "G-62SWH2YGCE"
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