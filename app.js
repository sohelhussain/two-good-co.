const locoJs = () => {

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
};
locoJs();
const scroll = () => {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};
scroll();
const headEffect = () => {
    gsap.from(".hero h1",{
        y:120,
        duration: 1,
        opacity: 0,
        stagger:.1
    })
};
headEffect();

//ther is effect are not working
// const overText = () => {
//     let tl = gsap.timeline({
//         scrollTrigger:({
//             trigger:"#container-first",
//             // scroller:"#main",
//             start:"50% 50%",
//             end:"50% 50%",
//             markers: true,
//             scrub:2
//         })
//     })
//     tl.to(".dark-para",{
//         width: 500,
//         // duration: 10,
        
//     })
// }
// overText();

// gsap.to(".dark-para",{
//     width: "500%",
//     scrollTrigger:({
//         trigger:"#container-second",
//         scroller:"#main",
//         start:"top 50%",
//         end:"top 50%",
//         markers: true,
//         scrub:2
//       })
// });