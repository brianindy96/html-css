$(document).ready(function() {

    $('.overlay1Btn').click(function(){

        gsap.to(".overlay1Btn", 1, {
            y: -100,
            opacity: 0,
        })

        gsap.to(".overlay1BgText", 1, {
            y: -400,
            opacity: 0,
            delay: 0.5,
        })
    })
})