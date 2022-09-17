export function setupSticky(){
    console.log("sticky javascript is working");
    window.onscroll = function() {
        stickHeader();
    }
    var header = document.getElementById("main-menu-container");
    var sticky = header.offsetTop;

    function stickHeader(){
        if (window.pageYOffset > sticky){
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }

    }
}