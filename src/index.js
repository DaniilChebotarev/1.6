import 'normalize.css'
import './styles/main.scss';

/* main-menu__main */

let content__more = document.querySelector(".content__more");
let content__close = document.querySelector(".content__close");

content__more.addEventListener('click', function(){
    document.querySelector(".content__paragraph").style.overflow = "visible";
    document.querySelector(".content__paragraph").style.height = "300px";
    content__more.style.display = "none";
    content__close.style.display = "block";
    
});

content__close.addEventListener('click', function(){
    document.querySelector(".content__paragraph").style.overflow = "hidden";
    document.querySelector(".content__paragraph").style.height = "160px";
    content__more.style.display = "block";
    content__close.style.display = "none";
});
/* feedback */ 
let feedback__open = document.querySelector('.footer--burger__mail');
let feedback_close = document.querySelector('.feedback-modal__btn');

feedback__open.addEventListener('click', function(){
  document.querySelector('.feedback-modal').style.right = '0px';
  document.querySelector('.body__wrapper').style.opacity = '0.05';
  document.querySelector('.body__wrapper').style.position = 'fixed';
})

feedback_close.addEventListener('click', function(){
  document.querySelector('.feedback-modal').style.right = '-500px';
  document.querySelector('.body__wrapper').style.opacity = '1';
  document.querySelector('.body__wrapper').style.position = 'static';
})

document.querySelector('.hidden').addEventListener('click', function(){
  document.querySelector('.feedback-modal').style.right = '-500px';
  document.querySelector('.body__wrapper').style.opacity = '1';
  document.querySelector('.body__wrapper').style.position = 'static';
});
/* burger-call*/
let burger_call__open = document.querySelector('.footer--burger__phone');
let burger_call_close = document.querySelector('.burger-call__btn');

burger_call__open.addEventListener('click', function(){
  document.querySelector('.burger-call').style.right = '0px';
  document.querySelector('.body__wrapper').style.opacity = '0.05';
  document.querySelector('.body__wrapper').style.position = 'fixed';
})

burger_call_close.addEventListener('click', function(){
  document.querySelector('.burger-call').style.right = '-500px';
  document.querySelector('.body__wrapper').style.opacity = '1';
  document.querySelector('.body__wrapper').style.position = 'static';
})

document.querySelector('.hidden').addEventListener('click', function(){
  document.querySelector('.burger-call').style.right = '-500px';
  document.querySelector('.body__wrapper').style.opacity = '1';
  document.querySelector('.body__wrapper').style.position = 'static';
})
/* burger-menu */

let burger_btn = document.querySelector('.header__btn-burger');
let burger_btn__close = document.querySelector('.header--burger__close');

if (window.innerWidth > 1119) {
  document.querySelector('.burger-menu').style.left = 'auto';
} else if (window.innerWidth < 1119) {
  burger_btn.addEventListener('click', function() {
    document.querySelector('.burger-menu').style.left = '0px';
    document.querySelector('.hidden').style.opacity = '0.05';
    document.querySelector('.hidden').style.position = 'fixed';
  })
  burger_btn__close.addEventListener('click', function() {
    document.querySelector('.burger-menu').style.left = '-500px';
    document.querySelector('.hidden').style.opacity = '1';
    document.querySelector('.hidden').style.position = 'static';
  })
  document.querySelector('.main').addEventListener('click', function(){
    document.querySelector('.burger-menu').style.left = '-500px';
    document.querySelector('.hidden').style.opacity = '1';
    document.querySelector('.hidden').style.position = 'static';
  })
}
/* swiper */

const slider = document.querySelector('.swiper')

let mySwiper;
let swiper__technic;
let price;

function moblileSlider() {
  if (window.innerWidth <= 424 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(".mySwiper", {
  
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
    
        clickable: true,
      
    },
      breakpoints: {
        550: {
          sliderPerViev: 3,
        },
      },
      });
      slider.dataset.mobile = 'true';
    swiper__technic = new Swiper(".swiper-technic", {
  
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination__technic',
      
          clickable: true,
        
      },
        breakpoints: {
          550: {
            sliderPerViev: 3,
          },
        },
        });
        slider.dataset.mobile = 'true';
        prices__table = new Swiper(".price", {
  
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination__price',
        
            clickable: true,
          
        },
          breakpoints: {
            550: {
              sliderPerViev: 3,
            },
          },
          });
          slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 424) {
    slider.dataset.mobile = 'false';

    
  }
};

moblileSlider()

window.addEventListener('resize', () => {
  moblileSlider();
});

/*-----*/



/*repair*/
let button = document.querySelector('.swiper__more') ;
    button.addEventListener('click', function() {
  document.querySelector('.swiper-wrapper').style.maxHeight = '850px';
    button.style.display = 'none';
  document.querySelector('.swiper__close').style.display = 'block';
  document.querySelector('.swiper-wrapper').style.Transition = '0.5s';
})


let button_close = document.querySelector('.swiper__close') ;
    button_close.addEventListener('click', function() {
  document.querySelector('.swiper-wrapper').style.maxHeight = '170px';
    button_close.style.display = 'none';
  document.querySelector('.swiper__more').style.display = 'block';
})

/*technic*/

let button_technic__more = document.querySelector('.swiper-technic__more');
let button_technic__close = document.querySelector('.swiper-technic__close');

button_technic__more.addEventListener('click', function() {
    document.querySelector('.swiper-technic__wrapper').style.maxHeight = '700px';
    button_technic__more.style.display = 'none';
    button_technic__close.style.display = 'block';
})

button_technic__close.addEventListener('click', function() {
  document.querySelector('.swiper-technic__wrapper').style.maxHeight = '160px';
  button_technic__close.style.display = 'none';
  button_technic__more.style.display = 'block';
})


/* burger-menu */

