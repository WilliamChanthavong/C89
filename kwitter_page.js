//YOUR FIREBASE LINKS

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
    // firebase.getAnalytics(app);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      //Start code
      
      //End code
} }); 
});
}

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push
      ({
            name:user_name,
            message:msg,
            like:0,
      });

      document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.href = "index.html";
}


getData();
