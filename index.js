let mobileMenu = document.getElementById("mobileMenu")
mobileMenu.style.maxHeight="0px"

function toggle(){
    if(mobileMenu.style.maxHeight=="0px"){
        mobileMenu.style.maxHeight="300px"
    }else{
        mobileMenu.style.maxHeight="0px"
    }
}