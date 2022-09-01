(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".top-navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".top-navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });
})(jQuery);

// client slider start
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// fornt page form hide and show
$(document).ready(function () {
  $("#first-form-button").click(function () {
    $(".service-form-1").hide();
    $(".service-form-2").slideDown();
  });

  // 2nd form back button
  $("#form-second-back-button").click(function () {
    $(".service-form-2").hide();
    $(".service-form-1").slideToggle();
  });

  // 2nd form filed
  $("#btncheck7,#btncheck8,#btncheck9").click(function () {
    $(".service-form-2").hide();
    $(".service-form-3").slideToggle();
  });

  // 3rd form back button
  $("#third-form-back-button").click(function () {
    $(".service-form-3").hide();
    $(".service-form-2").slideToggle();
  });

  // 3th form filed
  $("#btncheck10,#btncheck11,#btncheck12").click(function () {
    $(".service-form-3").hide();
    $(".service-form-4").slideToggle();
  });

  // 4th form back button
  $("#fourth-form-back-button").click(function () {
    $(".service-form-4").hide();
    $(".service-form-3").slideToggle();
  });

  // 4th form filed
  $("#fourth-submit-button").click(function () {
    $(".service-form-4").hide();
    $(".service-form-5").slideToggle();
  });

  // 5th form back button
  $("#fiveth-form-back-button").click(function () {
    $(".service-form-5").hide();
    $(".service-form-4").slideToggle();
  });

  // 5th form filed
  $(
    "#btncheck13,#btncheck14,#btncheck15,#btncheck16,#btncheck17,#btncheck18"
  ).click(function () {
    $(".service-form-6").slideToggle();
    $(".service-form-5").hide();
  });

  // 6th form back button
  $("#sixth-form-back-button").click(function () {
    $(".service-form-6").hide();
    $(".service-form-5").slideToggle();
  });
  // 6th form back button
  // $("#form-sixth-submit-button").click(function () {
  //   $(".service-form-7").hide();
  //   $(".service-form-6").slideToggle();
  // });
});
