$(document).ready(function() {

    $('.overlay1Btn').click(function(){

        gsap.to(".overlay1Btn", 1, {
            y: -100,
            opacity: 0,
            ease: "power4.out",

        })

        gsap.to(".overlay1BgText", 1, {
            y: -400,
            opacity: 0,
            delay: 0.5,
            ease: "power2.out",
        })

        // delay means start 1 second after the first one
        gsap.to(".overlay1", 1, {
            top: "-110%",
            delay: 1,
            ease: "expo.easeInOut",
        })

        // delay means start 2 second after the first one
        gsap.to(".overlay2", 1, {
            top: "-110%",
            delay: 1.5,
            ease: "expo.easeInOut",
        })

    })

    $('.overlay1Btn').hover(function(){gsap.to(".overlay1Btn", 0.1, {scale: 1.1})}, function(){gsap.to(".overlay1Btn", 0.1, {scale: 1})})

    
})