function logout(){
    firebase.auth().signOut();
    window.open('index.html','_self')
  }
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.


    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      // window.open('home.html','_self')
    }

  } else {
    // No user is signed in.

 

  }
});