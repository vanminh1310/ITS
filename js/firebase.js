// var config = {
//     apiKey: "AIzaSyCQDOTIYf6_8FHSbxsckL80gtI8DQfCe6g",
//     authDomain: "vvvvv-dc879.firebaseapp.com",
//     databaseURL: "https://vvvvv-dc879.firebaseio.com",
//     projectId: "vvvvv-dc879",
//     storageBucket: "vvvvv-dc879.appspot.com",
//     messagingSenderId: "740270975513",
//     appId: "1:740270975513:web:f3ad584a819ce129f99888",

// };
// firebase.initializeApp(config);

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

//     document.getElementById("user_div").style.display = "block";
//     document.getElementById("login_div").style.display = "none";

//     var user = firebase.auth().currentUser;

//     if(user != null){

//       var email_id = user.email;
//       document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

//     }

//   } else {
//     // No user is signed in.

//     document.getElementById("user_div").style.display = "none";
//     document.getElementById("login_div").style.display = "block";
   
//   }
// });

// function login(){

//   var userEmail = document.getElementById("email_field").value;
//   var userPass = document.getElementById("password_field").value;

//   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     window.alert("Error : " + errorMessage);

//     // ...
//   });

// }

// function logout(){
//   firebase.auth().signOut();
// }
$(".div input").on("focus",function(){
  $(this).addClass("focus");
});

$(".div input").on("blur",function(){
  if($(this).val() == "")
  $(this).removeClass("focus");
});
function check(form)/*function to check userid & password*/
{
/*the following code checkes whether the entered userid and password are matching*/
if(form.userid.value == "admin" && form.pswrd.value == "admin")
{
  window.open('home.html','_self')/*opens the target page while Id & password matches*/
}
else
{
 alert("Error Password or Usename")/*displays error message*/
}
}