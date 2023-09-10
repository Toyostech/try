// CHANGE NAVBAR styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList
    .toggle('window-scroll', window.scrolly > 0)
})


// show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //change icons
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'ion-ios-plus-empty'){
            icon.className = "ion-ios-minus-empty"
        }else{
            icon.className = "ion-ios-plus-empty";
        }
    })
})

// show/hide nav mane
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")


menuBtn.addEventListener('click', ()=> {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// closing the nav bar
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);


//
const contactformEl = document.querySelector('.contact__form');
const formnameEl = document.querySelector('.form__name');

const textEl = document.getElementsByClassName('.forEl');

textEl.addEventListener('focus', runTask);
function runTask() {
    textEl.style.background = 'yellow'
    textEl.style.color = 'pink'
   
    


}
textEl.addEventListener('blur', runBlur);
function runBlur() {
    textEl.style.background = '#1f2641'

}

