//Show Menu
const navMenu = document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')


//Menu Show
/**Valid if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
};


//Menu Show
/**Valid if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
};


//Remove Menu Mobile

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Change Background Header
const blurHeader = () => {
    const header = document.getElementById('header')

    //When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

//Testimonial Swiper
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",

    }
})

let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints:{
        768:{
            slidesPerView: 3,
        }
    }
  });

  //Scroll Sections Active Link
  const sections = document.querySelectorAll('section[id')

  const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = currentoffsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
  }
  window.addEventListener('scroll', scrollActive)



  //Show Scroll Up

  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup clsdd
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


  /**Scroll Reveal */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, // Animation repeat
  })

  sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`)
  sr.reveal(`.home__title span:nth-child(1)`, {origin: 'left', opacity: 1})
  sr.reveal(`.home__title span:nth-child(3)`, {origin: 'right', opacity: 1})
  sr.reveal(`.home__tooltip, .home__button, .model__button`, {origin: 'bottom'})
  sr.reveal(`.about__data`, {origin: 'left'})
  sr.reveal(`.about__img, .model__tooltip`, {origin: 'right'})