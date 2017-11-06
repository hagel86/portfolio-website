/* ==========================================================================
Smooth Scrolling effect
========================================================================== */

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
});

/* ==========================================================================
Navbar opacity
========================================================================== */
function checkScroll() {
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass("scrolled");
  } else {
    $('.navbar').removeClass("scrolled");
  }
}

if ($('.navbar').length > 0) {
  $(window).on("scroll load resize", function() {
    checkScroll();
  });
}

/* ==========================================================================
Personal Title Typed
========================================================================== */
var typed = new Typed("#personal-title-typed", {
  strings: ['I\'m a Full-Stack Web Developer'],
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 500,
  startDelay: 1000,
  loop: true
});

/* ==========================================================================
Skills Section
========================================================================== */
//This will trigger the circles animation when they're in the view port
var waypoints = $('#skills-section').waypoint(function() {
  $('.skill').each(function() {
    var getid = $(this).attr('id');
    myVal = $(this).attr("data-rel");
    desc = $(this).attr("desc")
    myCircle = Circles.create({
      width: 10,
      id: getid,
      radius: 85,
      colors: ['rgba(0, 0, 0 , 0)', '#E14D43'],
      value: myVal,
      duration: 2000,
      styleText: true,
      text: desc
    });
  });
  waypoints[0].disable()
}, {
  offset: '75%'
});

//Owl carousel setup
$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1100: {
      items: 4
    },
    1300: {
      items: 5
    }
  }
})
