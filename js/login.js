////////Login
function submitLogin(){
    let name = document.querySelector("#nome");
    let password = document.querySelector("#senha");
    sessionStorage.setItem("name", name.value);
    sessionStorage.setItem("password", password.value);
    if(name.value == localStorage.name && password.value == localStorage.password){
        window.location.href = "profile.html";
    } else {
        alert("Login incorreto")
    }
}

////////Register
function submitRegister(){
    let regname = document.querySelector("#regnome");
    let regpassword = document.querySelector("#regsenha");
    localStorage.setItem("name", regname.value);
    localStorage.setItem("password", regpassword.value);
    alert("Você é agora um amigo de Jesus");
}