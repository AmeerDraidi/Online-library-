let logout = document.getElementById("logout");
logout.onclick = function(){
    location.href = "./../../sign_in.html";
    sessionStorage.removeItem("admin");
}
