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
    })

    $('.overlay1Btn').hover(function(){gsap.to(".overlay1Btn", 0.1, {scale: 1.1})}, function(){gsap.to(".overlay1Btn", 0.1, {scale: 1})})


    
})