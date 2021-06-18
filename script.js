const changeBlue = () => {
    el2.style.cssText = 'background-color: rgba(81, 111, 251, 0.56)';
    el.style.cssText = 'background: linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)';
    if (window.matchMedia("(max-width: 375px)").matches) {
        elementblue.style.cssText = 'top: 83px';
        elementpink.style.cssText = 'top: 84px';
        elementorange.style.cssText = 'top: 88px';
      } else {
        elementblue.style.cssText = 'top: 34px';
        elementpink.style.cssText = 'top: 38px';
        elementorange.style.cssText = 'top: 38px';
      }   
}

const changePink = () => {
    el.style.cssText = 'background: linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)';
    el2.style.cssText = 'background-color: rgba(244, 155, 140, 0.56)';
    if (window.matchMedia("(max-width: 375px)").matches) {
        elementblue.style.cssText = 'top: 88px';
        elementpink.style.cssText = 'top: 80px';
        elementorange.style.cssText = 'top: 88px';
      } else {
        elementblue.style.cssText = 'top: 36px';
        elementpink.style.cssText = 'top: 34px';
        elementorange.style.cssText = 'top: 38px';
      } 
    
}

const changeOrange = () => {
    el.style.cssText = 'background: linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)';
    el2.style.cssText = 'background-color: rgba(240, 94, 43, 0.56)';
    if (window.matchMedia("(max-width: 375px)").matches) {
        elementblue.style.cssText = 'top: 88px';
        elementpink.style.cssText = 'top: 84px';
        elementorange.style.cssText = 'top: 83px';
      } else {
        elementblue.style.cssText = 'top: 36px';
        elementpink.style.cssText = 'top: 38px';
        elementorange.style.cssText = 'top: 34px';
      }
}

const changeSearch = () => {
    if (window.matchMedia("(max-width: 375px)").matches) {
        search.style.width = "199px";
        search.style.left = "152px";
    } 
}



const elementpink = document.querySelector('.pink');
const elementblue = document.querySelector('.blue');
const elementorange = document.querySelector('.orange');
const el = document.querySelector('header');
const el2 = document.querySelector('footer');
const search = document.getElementById('pesquisa');




elementblue.addEventListener('click', changeBlue);
elementpink.addEventListener('click', changePink);
elementorange.addEventListener('click', changeOrange);
search.addEventListener('click', changeSearch);