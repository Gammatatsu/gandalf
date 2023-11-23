// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3.45,
//   spaceBetween: 20,
//   // loop:true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

let headerButton = document.querySelector('.header__button')
let headerNavigation = document.querySelector('.header__navigation')

const form = document.querySelector('.footer__form');
const inputs = form.querySelectorAll('.footer__form-input');
let swiper = null;

headerButton.addEventListener('click', () => {
  console.log('click')
  headerButton.classList.toggle('header__button--active')
  headerNavigation.classList.toggle('header__navigation--active')
  document.querySelector('body').classList.toggle('--active');
})



inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.checkValidity()) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });
});








function initSwiper() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 400) {
    if (swiper) {
      swiper.destroy();
    }
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.25,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


  } else if (screenWidth <= 700) {

    if (swiper) {
      swiper.destroy();
    }
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (screenWidth <= 800) {


    if (swiper) {
      swiper.destroy();
    }
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (screenWidth <= 900) {

    if (swiper) {
      swiper.destroy();
    }
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 2.5,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    if (swiper) {
      swiper.destroy();
    }
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3.45,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

// Инициализация Swiper при загрузке страницы
initSwiper();

// Слушатель события изменения размера окна
window.addEventListener('resize', function () {
  initSwiper(); // Изменяем параметры Swiper в зависимости от ширины экрана
});







