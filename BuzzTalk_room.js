var firebaseConfig = {
      apiKey: "AIzaSyAb6M4Rg3C2VrGp7IPXSeHJ7XHqQ2AyhM0",
      authDomain: "buzztalk-991cd.firebaseapp.com",
      databaseURL: "https://buzztalk-991cd-default-rtdb.firebaseio.com",
      projectId: "buzztalk-991cd",
      storageBucket: "buzztalk-991cd.appspot.com",
      messagingSenderId: "43046583722",
      appId: "1:43046583722:web:2b721ec6bf9a3797eb3fd3",
      measurementId: "G-JSZTX4BP7S"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById('user_name').innerHTML = "Welcome " + user_name + "!";

function getData() {
      console.log("check1")
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  room_names = childKey;
                 
                  console.log("room_name-" + room_names)
                  row = "<div class='room_name' id=" + room_names + " onclick='redirectToRoomName(this.id)' >#" + room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                
                  console.log("check2")
            });
      });
}
getData();

function addRoom() {
    
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "buzztalk_page.html";
      console.log("check3")
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "buzztalk_message.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}