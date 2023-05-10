let btnmMenu = document.querySelector(".burgmenu");
let listMenu = document.querySelector(".list-menu");
btnmMenu.addEventListener("click",function(){
    listMenu.classList.toggle("active");
    btnmMenu.classList.toggle("active");
    
})