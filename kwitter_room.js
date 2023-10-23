
//ADD YOUR FIREBASE LINKS HERE

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";      
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
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}