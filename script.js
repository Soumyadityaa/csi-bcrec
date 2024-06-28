console.log("working"); 
const save=document.querySelector(".save"); 
const enter=document.getElementById("enter"); 
const login=document.getElementById("login");
var username=document.getElementById("inputEmail4").value; 
var password=document.getElementById("inputPassword4").value; 
var pass=document.getElementById("inputPassword4");
const toggle=document.querySelector(".toggle");
save.addEventListener("click",()=>{
	console.log("save the creds clicked"); 
	alert("Your credentials were successfully saved"); 

}); 
enter.addEventListener("click",()=>{
	console.log("enter clicked"); 
	alert("Thanks for filling up the form"); 
	
});  
toggle.addEventListener("click",()=>{
	console.log("toggle working"); 
	//change the attribute from value to text
	const type=pass.getAttribute("type"); 
	pass.setAttribute("type",
		type==="password"?"text":"password");

})
/*aunthenticate=()=>{
	console.log("authenticate working"); 
	if(username==="dhriti" && password==="123"){
		alert("Welcome"); 
	}  
	else if (username===""||password=""){
		alert("pls fill all the fields");
	} 
	else if(username==="" && password=""){
		alert("pls fill all the credentials");
	}
	else{
		alert("invalid credentials");
	}

}
login.addEventListener("click",()=>{
	console.log("login clicked"); 
	authenticate();
	
});*/

