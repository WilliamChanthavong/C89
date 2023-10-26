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
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumps-up'>Likes: "+ like +"</span>";

      row=name_with_tag + message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML += row;
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

function updateLike(message_id)
{
      console.log("clicked on likes button - "+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes)

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}


getData();
