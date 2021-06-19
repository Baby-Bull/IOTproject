

var login = document.getElementById("loginForm");	
login.addEventListener("submit", e =>{
	e.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var requestOptions = {
		method: 'POST',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify({username: username, password: password})
	};
	fetch("http://localhost:3000/auth/login", requestOptions)
	.then((response)=> {
		return response.json();
	})
	.then((data)=>{
		if(data.success == false){
			alert(data.error);
		}else{
			document.cookie = "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			alert("Hello "+ data.username+" !");
			document.cookie = ("userId="+ data.userId);
			location.href="http://localhost:3000/index.html"
		}
	})
})

// function validate(){
// 	var username = document.getElementById("username").value;
// 	var password = document.getElementById("password").value;
// 	if ( username == "sad" && password == "sad"){
// 		alert ("Login successfully");
// 		window.location = "index.html"; // Redirecting to other page.
// 		return false;
// 	}
// 	else{ 
// 		count --;// Decrementing by one.
// 		alert("Đồng chí còn "+count+" lần đăng nhập");
// 		document.getElementById("username").value="";
// 		document.getElementById("password").value="";

// 		if( attempt == 0){
// 			document.getElementById("username").disabled = true;
// 			document.getElementById("password").disabled = true;
// 			document.getElementById("submit").disabled = true;
// 			return false;
// 		}
// 	}
// }