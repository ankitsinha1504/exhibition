TweenMax.from(".left-container", 2, {
    width: "0",
    ease: Expo.easeInOut
  });
TweenMax.from(".right-container", 2, {
    delay: 1.5,
    width: "0",
    opacity: "0",
    ease: Expo.easeInOut
});
TweenMax.from(".center-container", 2, {
    delay: 3,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
});
TweenMax.from(".logo", 2, {
    delay: 1.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".exhib_p", 2 , {
    delay: 3.5,
    opacity: '0',
    ease: Expo.easeInOut
});
TweenMax.from(".info", 2, {
    delay: 1.5,
    y: 50,
    opacity: 0,
    scale: 2.5,
    ease: Expo.easeInOut
});
TweenMax.from(".story", 2, {
    delay: 2.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".menu", 2, {
    delay: 3.5,
    y: 20,
    opacity: 0,
    rotation: 90,
    ease: Expo.easeInOut
});



////////////////////////////////////
let tl = gsap.timeline({delay: 1});
        tl.from('header', { duration: 0.6, ease: "power2. out", y: -60 });
        tl.from('.hero-content', { duration: 0.6, ease: "power2. out", opacity:0,  y: -40});
        tl.from('.illustration', { duration: 0.6, ease: "power2. out", opacity:0});

        gsap.to("#red-car",{
            duration: 8,
            x: 1960,
            y: 439,
            ease: "none",
            repeat: 10,
            repeatDelay:2
        });

        gsap.to("#blue-car",{
            duration: 16,
            x: 412,
            y: 100,
            ease: "none",
            repeat: 10,
            repeatDelay:1
        });

        gsap.to("#yellow-car",{
            duration: 7,
            x: 884,
            y: 1114,
            ease: "none",
            repeat: 10,
            repeatDelay:1
        });