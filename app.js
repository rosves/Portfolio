

/* scroll horizontal*/ 
const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 0.3;

    console.log(scrollContainer.scrollLeft);
/*effet fleche rouge*/
    if(scrollContainer.scrollLeft >= 371){
        $(".mouse").fadeOut(1600)
        document.querySelector(".unu").style.animation = '';
        document.querySelector(".doi").style.animationPlayState = 'paused';
        document.querySelector(".trei").style.animationPlayState = 'paused';
        $(".unu").fadeOut(1500);
        $(".doi").fadeOut(1400);
        $(".trei").fadeOut(1300);
    }
});
