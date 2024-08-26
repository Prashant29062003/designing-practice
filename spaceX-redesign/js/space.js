(function(){
    let socials = document.querySelectorAll(".social div")

    socials.forEach((social,i)=>{
        social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${i/7 +.2}s`;    
    })

// rocket pieces animation on scroll
    let rocketPieces = document.querySelectorAll(".rocket-body span");
    let rocket = document.querySelector(".rocket");

    // ---------here this division with 5 is because when we scroll up or down it's trigger imidiately with innerHeight but we have to wait to scroll up at some extent on screen then this triggers.(we can modify this "5" with any number as per need) 
    let triggerStart = window.innerHeight / 5;

    let rocketOffsetTop = rocket.offsetTop;

    let thirdOffsetTop = rocketPieces[2].offsetTop;

    document.addEventListener("scroll",(e)=>{
        if(window.scrollY > (rocketOffsetTop - triggerStart)){
            rocketPieces[0].classList.add("active");
            rocketPieces[1].classList.add("active");
        }else{
            rocketPieces[0].classList.remove("active");
            rocketPieces[1].classList.remove("active");
        }

        // for third rocket piece
        if(window.scrollY > (thirdOffsetTop - triggerStart)){
            rocketPieces[2].classList.add("active");
        }else{
            rocketPieces[2].classList.remove("active");

        }
    })
}());

