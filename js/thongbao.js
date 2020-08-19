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

document.getElementById('send').onclick=function writeUserData(name) {
    var user = document.getElementById('infor').value;
    firebase.database().ref().child("name").set(user);
  }
//   ref la them mot nhanh moi
//  child la ten da co san 
