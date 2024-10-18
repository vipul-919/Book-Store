
// Animation 
var tl = gsap.timeline();
function HomePage() {

    tl.from(".logo-content, .navbar .nav, .navbar img, .navbar .btn", {
        x: 100,
        duration: 1,
        delay: 0.4,
        opacity: 0,
        stagger: 0.2,
    });

    tl.from(".main-img img", {
        x: 20,
        scale: 0.9,
        opacity: 0
    });

    tl.from(".main-content h3, .main-content #title, .main-content .main-para, .main-content .read-content, .main-content .main-list", {
        x: -100,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".logo-social a", {
        rotationX: 360,
        repeat: -1,
        stagger: 1.5,
        delay: 4,
    });

    gsap.from("#main-author h1", {
        y: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: "#main-author h1",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
        }
    });

    gsap.from("#main-author .author-card", {
        x: -50,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#main-author",
            scroller: "body",
            // markers:true,
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
        }
    });

    gsap.from("#main-about .main-about-img img", {
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#main-about .main-about-img img",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "bottom 60%",
        }
    });

    gsap.from(".about-author-content h3, .about-author-content,.about-author-content .para, .about-author-content .about-info, .about-author-content .about-detail", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        scrollTrigger: {
            trigger: ".about-author-content h3, .about-author-content .para, .about-author-content .about-info, .about-author-content .about-detail",
            scroller: "body",
            // markers:true,
            start: "top 55%",
        }
    });

    gsap.from("#main-company h1", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: "#main-company h1",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "bottom 40%",
        }
    });

    gsap.from("#main-company .company-container .company-card", {
        scale: 0,
        opacity: 0,
        stagger: 0.3,
        rotationY: 500,
        scrollTrigger: {
            trigger: "#main-company .company-container .company-card",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "bottom 40%",
        }
    });

    let Texttl = gsap.timeline();

    Texttl.to("#getbook-h1-effect , #getbook-p-effect ", {
        width: "100%",
        scrollTrigger: {
            trigger: "#main-getbook",
            scroller: "body",
            start: "top 60%",
            end: "40% 40%",
            // markers: true,
            scrub: 1
        }
    });

    gsap.from(".getbook-content a", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#main-getbook",
            scroller: "body",
            start: "top 60%",
            end: "40% 40%",
            // markers: true,
            scrub: 1
        }
    });

    gsap.from(".getbook-img img", {
        x: 300,
        y: 300,
        scale: 0,
        opacity: 0,
        rotationY: 100,
        rotationX: 100,
        scrollTrigger: {
            trigger: ".getbook-content a",
            scroller: "body",
            start: "top 70%",
            end: "bottom 60%",
            // markers: true,
            scrub: 1
        }
    })

    gsap.from("#main-learn h1", {
        y: 70,
        opacity: 0,
        ease: "expo.out",
        scrollTrigger: {
            trigger: "#main-learn h1",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
        }
    });

    tl.from(".learn-container .learn-card", {
        opacity: 0,
        scale: 0.5,
        stagger: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".learn-container .learn-card ",
            scroller: "body",
            // markers: true,
            start: "bottom 70%",
            end: "top 50%",
            scrub: 1,
        }
    });

    tl.from(".learn-img", {
        opacity: 0,
        scale: 0.8,
        stagger: 1,
        ease: "expoScale(0.5,7,none)",
        scrollTrigger: {
            trigger: ".learn-img",
            scroller: "body",
            // markers: true,
            start: "50% 80%",
            end: "top 40%",
            scrub: 1,
        }
    });

    gsap.from("#main-chap h1", {
        y: 70,
        opacity: 0,
        scrollTrigger: {
            trigger: "#main-chap h1",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
        }
    });

    gsap.from(".chap-container .chap-card", {
        scale: 0,
        opacity: 0,
        dusration: 1,
        stagger: 0.3,
        ease: "expo.out",
        scrollTrigger: {
            trigger: ".chap-container .chap-card",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "30% 40%",
            scrub: 1,
        }
    });

    gsap.from(".review-content h1, .review-content  .para, .review-content .review-rating, .review-content h4", {
        x: -50,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: "#main-review .review-content",
            scroller: "body",
            // markers: true,
            start: "0% 40%",
            end: "10% 22%",
            scrub: 1,
        }
    });

    gsap.from(".review-container .review-card", {
        scale: 0,
        opacity: 0,
        dusration: 1,
        stagger: 0.3,
        ease: "expo.out",
        scrollTrigger: {
            trigger: ".review-container .review-card",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 30%",
            scrub: 1,
        }
    });

    gsap.from("#main-article h1", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: "#main-article h1",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
        }
    });

    gsap.from(".article-card img", {
        y: 100,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".article-card ",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "25% 50%",
            scrub: 1,
        }
    });

    gsap.from(".article-content h3, .article-content .para, .article-content .article-info", {
        rotationX: 100,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".article-content",
            scroller: "body",
            // markers: true,
            start: "-10% 80%",
            end: "25% 70%",
            scrub: 1,
        }
    });

    gsap.from(".input-container", {
        y: -100,
        scrollTrigger: {
            trigger: ".input-container",
            scroller: "body",
            // markers: true,
            start: "30% 90%",
            end: "bottom 50%",
            scrub: 2,
        }
    });

    gsap.from(" .input-container h1 ,.input-container p , .input-container form", {
        y: -150,
        scrollTrigger: {
            trigger: ".input-container",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "40% 50%",
            scrub: 2,
        }
    });

    gsap.from(".footer-container .logo-container, .footer-container .explore , .footer-container .utility , .footer-container .contact", {
        x: -200,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".footer-container",
            scroller: "body",
            // markers: true,
            start: "-10% 90%",
            end: "30% 70%",
            scrub: 1
        }
    });
}


// About Page 
function AboutPage() {
    gsap.from("#heading h1, #heading p", {
        opacity: 0,
        y: 30,
        delay: 0.7,
        duration: 1,
        stagger: 0.3
    });

    gsap.from(".about-container .info, .about-container .info-content", {
        x: -50,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".about-container",
            scroller: "body",
            // markers: true,
            start: "0% 60%",
            end: "10% 40%",
            scrub: 1,
        }
    });
    
    gsap.from(" .about-container h2, .about-container p", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".about-container",
            scroller: "body",
            // markers: true,
            start: "0% 60%",
            end: "10% 40%",
            scrub: 1,
        }
    });

    gsap.from(" .story-content h2, .story-content .para, .story-content .story-detail", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#about-story",
            scroller: "body",
            // markers: true,
            start: "0% 60%",
            end: "10% 40%",
            scrub: 1,
        }
    });

    gsap.from(" .story-img", {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: "#about-story",
            scroller: "body",
            // markers: true,
            start: "0% 60%",
            end: "10% 40%",
            scrub: 1,
        }
    });

    gsap.from(" .about-img", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#about",
            scroller: "body",
            // markers: true,
            start: "0% 60%",
            end: "10% 40%",
            scrub: 1,
        }
    });
}

// Product Page 
function ProductPage() {
    gsap.from(".store-container .store-card", {
        opacity:0,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".store-product",
            scroller: "body",
            // markers: true,
            start:"0% 45%",
            end: "80% 100%",
            // scrub:1
        }
    })
}

// Contact Page 
function ContactPage() {
    gsap.from("#contact .left, #contact .right", {
        x:-20,
        opacity:0,
        delay:1,
    })
}


// Function Calling 
HomePage();
AboutPage();
ProductPage();
ContactPage();

// Hover 
function Hover() {
    const headBtn = document.querySelector(".navbar .btn"),
        MainImg = document.querySelector(".main-img img");

    headBtn.addEventListener("mouseover", () => {
        gsap.to(".navbar .btn", {
            backgroundColor: "unset",
            border: " 1px solid #FFCA42",
            color: "#fff",
            ease: "circ.out",
            duration: 0.8,
        })
    });
    headBtn.addEventListener("mouseout", () => {
        gsap.to(".navbar .btn ", {
            backgroundColor: "#FFCA42",
            color: "#1B3764",
            ease: "circ.out",
            duration: 0.6,
        })
    });

    MainImg.addEventListener("mouseover", () => {
        gsap.to(".main-img img", {
            scale: 1.06,
            ease: "power1.out",
            duration: 0.4,
        })
    });
    MainImg.addEventListener("mouseout", () => {
        gsap.to(".main-img img ", {
            scale: 1,
            ease: "power1.out",
            duration: 0.5,
        })
    });
}
Hover();

const mediaQuery = window.matchMedia("(max-width: 768px)");

// Add event listener to handle changes in screen size
mediaQuery.addListener(handleScreenSizeChange);

// Function to handle screen size changes
function handleScreenSizeChange() {
  if (mediaQuery.matches) {
    // Remove animation on smaller screens
    console.log("working");
    tl.kill(); // Kill the animation
    gsap.set(".logo-content, .navbar .nav, .navbar img, .navbar .btn, .main-img img, .main-content h3, .main-content #title, .main-content .main-para, .main-content .read-content, .main-content .main-list,  ", { clearProps: "all" })
  } else {
    // Restore animation on larger screens
    tl.restart(); // Restart the animation
  }
}

// Initial check for screen size on page load
handleScreenSizeChange();