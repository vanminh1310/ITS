const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


// $(".div input").on("focus",function(){
// 	$(this).addClass("focus");
//   });
  
//   $(".div input").on("blur",function(){
// 	if($(this).val() == "")
// 	$(this).removeClass("focus");
//   });
//   function check(form)/*function to check userid & password*/
//   {
//   /*the following code checkes whether the entered userid and password are matching*/
//   if(form.userid.value == "admin" && form.pswrd.value == "admin")
//   {
// 	window.open('home.html','_self')/*opens the target page while Id & password matches*/
//   }
//   else
//   {
//    alert("Error Password or Usename")/*displays error message*/
//   }
//   }
  