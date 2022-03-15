// scroll anchor
$(document).on('click', ' a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// header burger
const burger = document.querySelector('.header__burger'),
header = document.querySelector('.header__nav'),
body = document.body;

if(burger) {
  burger.addEventListener('click', function() {
    this.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

if(header) {
  header.addEventListener('click', function() {
    this.classList.remove('active');
    burger.classList.remove('active')
    body.classList.remove('lock');
  });
}


// activity
var swiper = new Swiper(".activity__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const details = document.querySelectorAll('.details');

details.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let content = this.previousElementSibling.querySelector('.main-subtitle');
    if(content.classList.contains('open')) {
      btn.textContent = 'Подробнее';
      content.classList.remove('open');
    } else {
      content.classList.add('open');
      btn.textContent = 'Показать меньше';
    }
  })
})


// form

// const inp = document.querySelector('#phone');
// const tel = document.querySelector('.tel');

// inp.addEventListener('keypress', e => {
//   if(!/\d/.test(e.key))
//     e.preventDefault();
// });

// inp.addEventListener('blur', function() {
//   if(inp.value !== '' && inp.value.length === 9) {
//     tel.style.display="none";
//     inp.style.paddingLeft="22px";
//     inp.value = '+380' + this.value;
//   }
// })

// modal
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const detailsArray = document.querySelectorAll('.more-details');
const close = document.querySelectorAll('.modal__close');

detailsArray.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    if ($(window).width() >= 767) {
      const modalName = this.getAttribute('data-modal');
      const modal = document.querySelector('.modal[data-modal="'+ modalName +'"]');
      modal.classList.add('active');
      overlay.classList.add('active');
      document.body.classList.add('lock');
    } else {
      this.previousElementSibling.previousElementSibling.classList.add('open');
      item.classList.add('open');
      item.href = "/form.html";
      let content = this.previousElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        // item.classList.remove('open');
        // item.previousElementSibling.previousElementSibling.classList.remove('open');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // click arrow
      arrow = item.previousElementSibling.querySelector('.arrow');
      arrow.addEventListener('click', function() {
        content.style.maxHeight = null;
        item.previousElementSibling.previousElementSibling.classList.remove('open');
        item.textContent = 'Подробнее';
        item.classList.remove('open');
      })
    }
  })
})

close.forEach(function(item) {
  item.addEventListener('click', function() {
    this.parentNode.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  })
}) 

overlay.addEventListener('click', function() {
  modals.forEach(function(modal) {
    if(modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  })
  overlay.classList.remove('active');
  document.body.classList.remove('lock');
})

// const btns = document.querySelectorAll('.button');
// btns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     modals.forEach(function(el) {
//       el.classList.remove('active');
//     })
//     overlay.classList.remove('active');
//     document.body.classList.remove('lock');
//   })
// })