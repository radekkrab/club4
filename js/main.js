let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById ('prev');
let next = document.getElementById ('next');

next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("team__carousel__item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    if(window.screen.width > 800){if(slides[slideIndex]){slides[slideIndex].style.display = "block";}} 
    if(window.screen.width > 1100){if(slides[slideIndex + 1]){slides[slideIndex + 1].style.display = "block";}} 
    
    // else{
    //     for (let slide of slides) {
    //         slide.style.display = "block";
    //     }
    // }
  }
 var timer = 0;
 makeTimer(); //Создаем интервал 
 function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },4000);
  }

//   Слайдер для карточек
let prev2 = document.getElementById ('prev2');
let next2 = document.getElementById ('next2');
let cards = document.querySelector(".steps__grid");
let translateValue = 0;

next2.addEventListener ("click", function () {
  if(translateValue > 180 || translateValue < -271){return false;}else{translateValue -= 90;
  cards.style.transform = `translateX(${translateValue}vw)`;}
 
});
prev2.addEventListener ("click", function () {
  if(translateValue == 0 || translateValue < -361){return false;}else{translateValue += 90;
  cards.style.transform = `translateX(${translateValue}vw)`;}
});
    
