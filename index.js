let circle = document.querySelector("#circle");

window.addEventListener("mousemove", function (details) {
  let xValue = details.pageX - 35;
  let yValue = details.pageY - 32;

  setTimeout(function () {
    circle.style.top = yValue + "px";
    circle.style.left = xValue + "px";
  }, 90);
});



$("#down #text h3").textillate({
  autoStart: false,
  in: {
    effect: "fadeInUp",
    delay: 12,
  },

//   gsap.fromTo("#down #text h3",{

//   }),
//   scrollTrigger: {
//     trigger: '#down #text h3',
//     // markers: true,
//     // start: 'top 7%',
//     toggleActions: 'play pause resume reverse',
//   },

  callback: function () {
    gsap.fromTo( "#down #text img",{
        opacity: 0,
        y: -30,
        duration: 2,
        ease: "Expo.easeInOut",
      },
      {
        opacity: 1,
        y: 0,
      }
    )
  }
});

$("#hero h1").textillate({
  in: {
    effect: "fadeInUp",
    // callback: function(){
    //     $('#hero h1').textillate('out');
    // }
  },
  loop: true,
  out: {
    effect: "fadeOutRight",
  },
});

gsap.to(".fader", {
  scrollTrigger: {
    trigger: '#down',
    // markers: true,
    start: 'top 7%',
    toggleActions: 'play pause resume reverse',
  },
  opacity: 0,
  y: -100,
  stagger: 0.3,
  duration: 2,
  onComplete: function () {
    $("#down #text h3").textillate("start");
  },
});
