function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

if (isMobile()) {
    var menu = document.querySelector("nav #menu")
    var cross = document.querySelector("#part2 #close")

    var tl3 = gsap.timeline()

    tl3.to("#part2", {
        right: 0,
        duration: 0.5,
    })
    tl3.from("#part2 h4, #part2 button", {
        x: 150,
        duration: 0.5,
        stagger: 0.28,
        opacity: 0
    })
    tl3.from("#part2 i", {
        opacity: 0
    })
    tl3.pause()

    menu.addEventListener("click", function () {
        tl3.play()
    })

    cross.addEventListener("click", function () {
        tl3.reverse()
    })
}

function page1Animation() {
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -10,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.5
    })

    tl.from(".center-part1 h1", {
        x: -200,
        duration: 0.5,
        opacity: 0,
    })
    tl.from(".center-part1 p", {
        x: -150,
        duration: 0.4,
        opacity: 0,
    })
    tl.from(".center-part1 button", {
        duration: 0.4,
        opacity: 0,
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        scale: 0,
        duration: 1
    }, "-=1")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15
    })
}
function page2Animation() {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 70%",
            end: "top 0%",
            // scrub: 2
        }
    })

    tl2.from(".services", {
        x: -50,
        opacity: 0
    })

    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim1")

    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1")

    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim2")

    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2")
}
function page3Animation() {

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: "top 70%",
            end: "top 0%"
        }
    })

    tl4.from(".main-part1 h1", {
        x: -200,
        duration: 0.5,
        opacity: 0,
    })
    tl4.from(".main-part1 p", {
        x: -150,
        duration: 0.4,
        opacity: 0,
    })
    tl4.from(".main-part1 button", {
        duration: 0.4,
        opacity: 0,
    })
    tl4.from(".main-part2 img", {
        opacity: 0,
        scale: 0,
        duration: 1
    }, "-=1")
    tl4.from(".case", {
        x: -50,
        opacity: 0
    })

}
page1Animation()
page2Animation()
page3Animation()


function colorHandle() {
    if (isMobile()) {
        console.log("MOBILE")
        var black = document.querySelector(".elem.line2.black.left")
        var blue = document.querySelector(".elem.line2.right")
    
        black.classList.remove("black")
        blue.classList.add("black")
    }
}
colorHandle()