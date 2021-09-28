// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCmbHU_r_W8Q4sNFH0SP71HXF7Zwhlqn7g",
      authDomain: "kwitter-17bf6.firebaseapp.com",
      projectId: "kwitter-17bf6",
      storageBucket: "kwitter-17bf6.appspot.com",
      messagingSenderId: "480100722463",
      appId: "1:480100722463:web:0327ff11aa186ec017322a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

