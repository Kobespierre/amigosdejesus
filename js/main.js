////////Image Scroll
(function (){

    let index = 0;
    const buttonLeft = document.querySelector(".buttonl"),
        buttonRight = document.querySelector(".buttonr"),
        frame1 = document.querySelector(".img1"),
        frame2 = document.querySelector(".img2"),
        frame3 = document.querySelector(".img3"),
        frame4 = document.querySelector(".img4");

    function imgScroll() {
        frame1.setAttribute("src", `imgs/img${index + 1}.jpg`);
        frame2.setAttribute("src", `imgs/img${index + 2}.jpg`);
        frame3.setAttribute("src", `imgs/img${index + 3}.jpg`);
        frame4.setAttribute("src", `imgs/img${index + 4}.jpg`);
        frame1.parentElement.setAttribute("href", `imgs/fullimg${index + 1}.jpg`);
        frame2.parentElement.setAttribute("href", `imgs/fullimg${index + 2}.jpg`);
        frame3.parentElement.setAttribute("href", `imgs/fullimg${index + 3}.jpg`);
        frame4.parentElement.setAttribute("href", `imgs/fullimg${index + 4}.jpg`);
    }

    function imgScrollLeft(){
        if(index >= 4){index -= 4;} else {index = 0;}
        imgScroll();
    }

    function imgScrollRight(){
        if(index <= 12 - 8){index += 4;} else {index = 12 - 4;}
        imgScroll();
    }

    buttonLeft.addEventListener("click", imgScrollLeft);
    buttonRight.addEventListener("click", imgScrollRight);

})();

////////Menu Profile
function profileAccess(){
    if(sessionStorage.getItem("name") != null  && sessionStorage.getItem("password") != null)
    {
        if(sessionStorage.name == localStorage.name && sessionStorage.password == localStorage.password){
            window.location.href = "profile.html";
        } else {
            window.location.href = "login.html";
        }
    } else {
        window.location.href = "login.html";
    }
}