(function (){
    ////////Profile Name
    let profileName = document.querySelector("#profname");
    let capString = localStorage.name;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
    let capName = capitalizeFirstLetter(capString);
    profileName.innerHTML = capName;
})();