var slider = new Swiper(".swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  preventClick: false,
  preventClickOutside: false,
  preventClicksPropagation: false
})

slider.on('slideChange', function () {
  TweenMax.to('.slide-text span', .2, {
    y: '-100px',
  })
  TweenMax.to('.slide-number span', .2, {
    x: '-100px',
  })
  TweenMax.to('.swiper-slide-active', .5, {
    scale: .85
  })
})

slider.on('slideChangeTransitionEnd', function () {

  TweenMax.to('.slide-text span', .2, {
    y: 0,
    delay: .5
  })
  TweenMax.to('.slide-text span', 0, {
    y: '100px',
  })

  TweenMax.to('.slide-number span', .2, {
    x: 0,
    delay: .7
  })
  TweenMax.to('.slide-number span', 0, {
    x: '100px',
  })

  TweenMax.to('.swiper-slide-active', .5, {
    scale: 1,
    ease: Power4.easeOut,
  })

  TweenMax.to('.swiper-slide-active .slide-text', 0, {
    autoAlpha: 1
  })
  TweenMax.to('.swiper-slide-active .slide-number', 0, {
    autoAlpha: 1
  })

  TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
  })

  TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
  })
})

TweenMax.to('.swiper-slide-next .slide-text', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide-next .slide-number', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide', 0, {
  scale: .85,
})

TweenMax.to('.swiper-slide-active', 0, {
  scale: 1,
})

//////////////////3d effect//////////////////////////
const container = document.querySelector(".container");
const card = document.querySelector(".container .row");
const painting = document.querySelector(".paint-img");
const heading = document.querySelector(".paint-head");
const text = document.querySelector(".paint-text");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  heading.style.transform = "translateZ(50px)";
  painting.style.transform = "translateZ(160px)";
  text.style.transform = "translateZ(160px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  heading.style.transform = "translateZ(0px)";
  painting.style.transform = "translateZ(0px)";
  text.style.transform = "translateZ(0px)";
});
