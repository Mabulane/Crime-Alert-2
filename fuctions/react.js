//Get element
const menu =document.querySelector('#menu');
const closeMenu = document.querySelector('#closeNav');

menu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#sideMenu').style.width ="250px";
});
closeMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#sideMenu').style.width ="0";
});