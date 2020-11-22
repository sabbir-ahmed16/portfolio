$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });

  // Removes overlapping on first load due to absence of cache.
  // isotope plugins for filtering the projects
  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
})



$(document).ready(function () {
    $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Undergraduate Student.", "Machine Learning Enthusiast."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  // Skills section
  // $('.owl-carousel').owlCarousel({
  //   loop:true,
  //   items: 4,
  //   responsive:{
  //       0:{
  //           items:1
  //       },
  //       480:{
  //           items:2
  //       },
  //       768:{
  //           items:3
  //       },
  //       938:{
  //         items:4
  //       }
  //     }
  // });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },            
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function () {
      if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
        $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: '#ffd32a',
          trackColor: false,
          scaleColor: false, 
          lineWidth: 4,
          size: 152,
          onStep: function (from, to, percent) {
              $(this.el).find(".percent").text(Math.round(percent));
          }
        });
      }
      if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 220) {
        $(".counter").each(function () {
          var element = $(this);
          var endVal = parseInt(element.text());
          element.countup(endVal);
        })
          countUpFinished = true;
      }
  });
  
  /*-------------mousewheel-------------*/
  // var owl_skills = $('.owl-carousel');
  // owl_skills.owlCarousel({
  //   loop: true,
  //   nav: true,
  //   margin: 10,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     960: {
  //       items: 3
  //     },
  //     1200: {
  //       items: 4
  //     }
  //   }
  // });
  // owl_skills.on('mousewheel', '.owl-stage', function (e) {
  //   if (e.deltaY > 0) {
  //     owl_skills.trigger('next.owl');
  //   } else {
  //     owl_skills.trigger('prev.owl');
  //   }
  //   e.preventDefault();
  // });


  // Project Image view in full screen
  $("[data-fancybox]").fancybox();


  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });


  // Smooth scrolling to navigation menu
  $("#navigation li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  // Sticky Navigation Bar
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }
    else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
