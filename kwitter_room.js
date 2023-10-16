
//ADD YOUR FIREBASE LINKS HERE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGXLP417mDR_je6JKlkxNGoGH4okRN1WE",
  authDomain: "hey-cb810.firebaseapp.com",
  databaseURL: "https://hey-cb810-default-rtdb.firebaseio.com",
  projectId: "hey-cb810",
  storageBucket: "hey-cb810.appspot.com",
  messagingSenderId: "716661419003",
  appId: "1:716661419003:web:a8eaf1dc71d4e912b6795e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
    localStorage.removeItem("user_name");
    window.location.href = "index.html";
}

function addRoom()
{
    
}