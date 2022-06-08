//Variables
let hamburgerOpen = false;

//Hamburger menu
function hamburgerClicked(){
    if (hamburgerOpen) {
        document.getElementById("leftnav").style.display = "none";
        hamburgerOpen = false;
    } else {
        document.getElementById("leftnav").style.display = "block";
        hamburgerOpen = true;
    }
}