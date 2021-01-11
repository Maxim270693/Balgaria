
// Слайдер
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow__first',
    prevEl: '.arrow__second',
  },
})


//Всплывающее окно при нажатии на кнопку
var button = document.getElementById('i')
button.addEventListener('click', function(){
    swal({
    title: "Заказать звонок?",
    text: "Закажите звонок, и мы вам перезвоним!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Здорово! Ожидайте звонка!", {
        icon: "success",
      });
    } else {
      swal("Удачи!");
    }
  });
})
// Узнать максимальную длину экрана
// alert(document.documentElement.clientWidth)

//Прокрутка вниз по кнопке
function scrollTo(element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var bottom = document.getElementById('fa')
var advantages = document.getElementById('advantages')

bottom.addEventListener('click', () => {
  scrollTo(advantages);
})