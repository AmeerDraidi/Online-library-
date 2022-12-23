localStorage.setItem("admin","admin");
localStorage.setItem("pass",123456);
let LocalName = localStorage.getItem("admin");
let LocalPass = localStorage.getItem("pass");
let Btn = document.getElementById("loginBtn");
let name = document.getElementById("name");
let pass = document.getElementById("pass");
let alert = document.getElementById("alert");
let Name = name.value;
Btn.onclick= function(){
if(name.value == LocalName && pass.value == LocalPass)
{
    location.href = "/admin.html";
    sessionStorage.setItem("admin",true);
}  
else{
    alert.classList.replace('d-none','d-block');
}  
}


