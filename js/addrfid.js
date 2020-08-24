var config = {
    apiKey: "AIzaSyCQDOTIYf6_8FHSbxsckL80gtI8DQfCe6g",
    authDomain: "vvvvv-dc879.firebaseapp.com",
    databaseURL: "https://vvvvv-dc879.firebaseio.com",
    projectId: "vvvvv-dc879",
    storageBucket: "vvvvv-dc879.appspot.com",
    messagingSenderId: "740270975513",
    appId: "1:740270975513:web:f3ad584a819ce129f99888",
  
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var rfid = document.getElementById('rfid')
  var redrfid = firebase.database().ref().child("rfid");
redrfid.on('value', function (redrfid) //đọc dữ liệu tu firebase
{

    rfid.innerText ="Mã RFID:" + redrfid.val();
    console.log(redrfid.val())
    ;})