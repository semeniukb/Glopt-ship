window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });
});

// let slider = tns({
//     container: '.carousel_slider',
//     items: 2,
//     autoplay: false,
//     loop: true,
//     gutter: 45,
//     mouseDrag: true,
//     fixedWidth: 400,
//     center: true,
//     animateIn: 'class'
//   });
$('.carousel_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    prevArrow: "<img src='icons/prev_arow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='icons/next_arrow.svg' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

$('#message').on('input', function(){
    this.style.height = '1px';
    this.style.height = (this.scrollHeight + 6) + 'px'; 
});

// PageUP and scroll
$(window).scroll(function(){
  if ($(this).scrollTop() > 1600){
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

//Validate form
// $('.consultation__form, .question__form').validate({
//   rules: {
//     name: {
//       required: true,
//       minlength: 2
//     },
//     phone: 'required',
//     email: {
//       required: true,
//       email: true
//     }},
//   messages: {
//     name: {
//       required:"Введіть будь ласка ваше ім'я",
//       minlength: jQuery.validator.format("Введіть більше {0} символів")
//     },
//     phone: "Введіть ваш номер телефону",
//     email: {
//       required: "Введіть вашу пошту",
//       email: "Введіть коректу форму емейл@mail.com"
//     }
//   }
// });

// $('.question__form').validate({
//   rules: {
//     name: {
//       required: true,
//       minlength: 2
//     },
//     phone: 'required',
//     email: {
//       required: true,
//       email: true
//     }},
//   messages: {
//     name: {
//       required:"Введіть будь ласка ваше ім'я",
//       minlength: jQuery.validator.format("Введіть більше {0} символів")
//     },
//     phone: "Введіть ваш номер телефону",
//     email: {
//       required: "Введіть вашу пошту",
//       email: "Введіть коректу форму емейл@mail.com"
//     }
//   }
// });

function validateForms(form){
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: 'required',
      email: {
        required: true,
        email: true
      }},
    messages: {
      name: {
        required:"Введіть будь ласка ваше ім'я",
        minlength: jQuery.validator.format("Введіть більше {0} символів")
      },
      phone: "Введіть ваш номер телефону",
      email: {
        required: "Введіть вашу пошту",
        email: "Введіть коректу форму емейл@mail.com"
      }
    }
  });
};
validateForms('.consultation__form');
validateForms('.question__form');

$('input[name=phone]').mask("+38 (999) 999-99-99");

$('form').submit(function(e){
  e.preventDefault();

  if(!$(this).valid()) {
    return;
  }
  $.ajax({
    type:"POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find('input').val('')
    $('form').trigger('reset');
  });
  return false;
  
});