// đồng hồ cho trang web 
setInterval(displayclock,500);

  function displayclock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hrs>12){
      hrs = hrs -12;

    }
    if(hrs == 12){
      hrs = 12;
    }
    if(hrs<10){
      hrs ='0'+hrs;
    }
    if(min<10){
      min = '0' +min;

    }
    if(sec<10){
      sec= '0'+sec;
    }
    document.getElementById('clock').innerHTML=hrs + ':' + min +':' + sec;
  }

//kết nối  database 
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


document.getElementById('btn_send').onclick = function()
{
  var inputid = document.getElementById('inputid').value;
  var inputname = document.getElementById('inputname').value;
  var inputsdt = document.getElementById('inputsdt').value;
  var inputcd = document.getElementById('inputcd').value;
  
// khai báo biến 
if( inputsdt.length<1 && inputcd.length<1 && inputname.length<1 && inputid.length<1){
  // kiểm tra xem có dữ liệu không 
  document.getElementById('modal_addrfid_err').style.display='block';
  document.getElementById('alert').style.display='block';
  
  
}
if(inputid.length<1){
  document.getElementById('tb_p_id').style.display='block';
 

}
if(inputname.length<1){
  document.getElementById('tb_p_name').style.display='block';
  
}
if(inputcd.length<1){
  document.getElementById('tb_p_cd').style.display='block';
    
}
if(inputsdt.length<1){
  document.getElementById('tb_p_sdt').style.display='block';
      
}

//


 else{
  //  có dữ liệu thì guử qua database
  firebase.database().ref('ID/'+inputid).set({
    Name: inputname,
    Sdt: inputsdt,
    Cd: inputcd


  });
  
  document.getElementById('modal_addrfid_sc').style.display='block';
  document.getElementById('alert_sc').style.display='block';
  document.getElementById('tb_p_id').style.display='none';
  document.getElementById('tb_p_name').style.display='none';
  document.getElementById('tb_p_cd').style.display='none';
  document.getElementById('tb_p_sdt').style.display='none';
}

// hiển thị thông báo 
window.onclick=function(event){
  if(event.target == modal_addrfid_err){
  
    modal_addrfid_err.style.display='none';
  }
  if (event.target == modal_addrfid_sc) {
    modal_addrfid_sc.style.display='none';
  }
}
}
