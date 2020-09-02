import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCo7VWyXlw_BzEwnQFT1HFDrpjvMXl30Ck",
  authDomain: "mas-calculator-history.firebaseapp.com",
  databaseURL: "https://mas-calculator-history.firebaseio.com",
  projectId: "mas-calculator-history",
  storageBucket: "mas-calculator-history.appspot.com",
  messagingSenderId: "964152935347",
  appId: "1:964152935347:web:f9bb0f6be12f021d7241c6",
  measurementId: "G-VZF9QSJLQF",
};
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
