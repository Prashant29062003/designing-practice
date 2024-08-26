 window.addEventListener("resize", function(){
    addRequiredClass();
 })
function addRequiredClass (){
    if(window.innerWidth < 860){
        document.body.classList.add("mobile")
    }else{
        document.body.classList.remove("mobile")
        
    }
}
window.onload = addRequiredClass

let hamburger = document.querySelector(".hamburger-menu");
let navigation = document.querySelector(".navigation");

let bars = document.querySelectorAll(".bars");

let isActive = false
hamburger.addEventListener("click",()=>{
    navigation.classList.toggle("open");
    if(!isActive){
        bars[0].style.transform = "rotate(45deg)";
        bars[1].style.opacity = 0;
        bars[2].style.transform = "rotate(-45deg)";
        isActive = true;
    }
    else{
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = 1;
        bars[2].style.transform = "rotate(0deg)";
        isActive = false;

    }

})