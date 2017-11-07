$(document).ready(function() {

  /* ==========================================================================
  Modal Setup
  ========================================================================== */

  function i(i) {
        var s = i.width() / 2
          , e = i.offset().left + s
          , t = i.offset().top + s - $(window).scrollTop()
          , a = n(t, e, s, $(window).height(), $(window).width());
        return i.css("position", "fixed").velocity({
            top: t - s,
            left: e - s,
            translateX: 0
        }, 0),
        a
    }
    function n(i, n, s, e, t) {
        var a = n > e / 2 ? n : e - n
          , o = i > t / 2 ? i : t - i;
        return Math.ceil(Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2)) / s)
    }
    function s(i, n, s) {
      $("#navbar").toggle()
        i.velocity({
            scale: n
        }, 400, function() {
              $("body").toggleClass("noscroll", s),
              s ? i.parents(".cd-section").addClass("modal-is-visible").end().off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend") : i.removeClass("is-visible").removeAttr("style").siblings('[data-type="modal-trigger"]').removeClass("to-circle")
          })
    }
    function e() {
        var i = $(".cd-section.modal-is-visible").find(".cd-modal-bg")
          , s = i.width() / 2
          , e = i.siblings(".btn").offset().top + s - $(window).scrollTop()
          , t = i.siblings(".btn").offset().left + s
          , a = n(e, t, s, $(window).height(), $(window).width());
        i.velocity({
            top: e - s,
            left: t - s,
            scale: a
        }, 0)
    }
    function t() {
        var flip = 0;
        $("#navbar").toggle(400);
        var i = $(".cd-section.modal-is-visible");
        i.removeClass("modal-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            s(i.find(".cd-modal-bg"), 1, !1)
        }),
        i.parents(".no-csstransitions").length > 0 && s(i.find(".cd-modal-bg"), 1, !1)
    }
    $('[data-type="modal-trigger"]').on("click", function() {
        var n = $(this)
          , e = i(n.next(".cd-modal-bg"));
        n.addClass("to-circle"),
        n.next(".cd-modal-bg").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            s(n.next(".cd-modal-bg"), e, !0)
        }),
        n.parents(".no-csstransitions").length > 0 && s(n.next(".cd-modal-bg"), e, !0)
    }),
    $(".cd-section .cd-modal-close").on("click", function() {
        t()
    }),
    $(document).keyup(function(i) {
        "27" == i.which && t()
    }),
    $(window).on("resize", function() {
        $(".cd-section.modal-is-visible").length > 0 && window.requestAnimationFrame(e)
    });

  /* ==========================================================================
  Smooth Scrolling effect
  ========================================================================== */
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
    1484: {
      items: 5
    }
  }
})
