$(document).ready(function () {
  $('.tab-pane').css({ 'display': 'block' });
  setTimeout(function () {
    $('.tab-pane').removeAttr('style');

  }, 500);
});
$(".owl-one").owlCarousel({
  dots: false,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    430: {
      items: 3
    },
    1440: {
      items: 4,
    },
  },
});
$(".owl-two").owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    430: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
$(".owl-three").owlCarousel({
  nav: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    430: {
      items: 2,
      nav: true,
      dots: false,
    },
    1000: {
      items: 3,
      nav: true,
      dots: false,
    },
  },
});
$(document).ready(function () {
  $('.dropdown-menu a.dropdown-toggle').on('mouseover', function (e) {
    var $el = $(this);

    $el.toggleClass('active-dropdown');
    var $parent = $(this).offsetParent(".dropdown-menu");
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parent("li").toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-menu .show').removeClass("show");
      $el.removeClass('active-dropdown');
    });

    if (!$parent.parent().hasClass('navbar-nav')) {
      $el.next().css({ "top": "-3px", "left": $parent.outerWidth() - 4 });
    }

    return false;
  });
  $('#ToU').tooltip({
    title: '<div class="head_more p-4 shadow border"><div class="container"><div class="row"><div class="col-md-12"><p>Turn what you know into an opportunity and reach millions around the world.</p><a href="">Learn more</a></div></div></div></div>',
    html: true,
    placement: 'bottom',
    delay: {show:200, hide:3000}
  });
  $('#UfB').tooltip({
    title: '<div class="head_more p-4 shadow border"><div class="container"><div class="row"><div class="col-md-12"><p>Get your team access to 4,000+ top Udemy courses anytime, anywhere</p><a href="" > Try Udemy for Business</a></div ></div ></div ></div > ',
    html: true,
    placement: 'bottom',
    delay: {show:200, hide:3000}
  })
  $('[data-toggle="tooltip"]').on("show.bs.tooltip", function () {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });
  $(window).click(function () {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });
});

$('[data-toggle="popover"]').popover({
  animation: true,
  html: true,
  delay: { show: 200, hide: 3000 },
  sanitize: false,
  placement: "auto",
  trigger: "hover focus",
  content:
    ' <div class="item__hover shadow border py-5 px-2 m-auto"><div class="container"><div class="row"><div class="col-md-12"><p>Last update: 07/2020</p><h3><a href="">The Complete Foundation Stock Trading Course</a></h3><p class="category"><span class="best-seller">best seller</span> in <a href="">Stock Trading</a> | Bussiness</p><ul class="details"><li><i class="fas fa-play-circle    "></i> 41 lectures</li><li><i class="fas fa-clock    "></i> 9.5 totals hours</li><li><i class="fas fa-filter    "></i> All levels</li><li><i class="fas fa-closed-captioning    "></i></li></ul><p>Learn To Trade The Stock Market by A Trading Firm CEO. Inc: Technical Analysis, Candlesticks, Stocks, Day Trading +++</p><ul class="infor"><li>Completely understand how the stock market works.</li><li>Know the process that a company goes through to become a Publicly Traded Company.</li><li>Know the history of the Stock Market and its Evolution.</li></ul><div><button class="btn btn-signup">Add to cart</button> <i class="fas fa-heart    "></i></div></div></div></div></div>',
});


$('[data-toggle="popover"]').on("show.bs.popover", function () {
  $('[data-toggle="popover"]').popover("hide");
});
$(window).click(function () {
  $('[data-toggle="popover"]').popover("hide");
});

$("#top-categories .col-md-3 a")
  .on("mouseover", function () {
    $(this).parent().css({ "box-shadow": "0 2px 8px 2px rgba(20,23,28,.15)" });
  })
  .on("mouseleave", function () {
    $(this).parent().removeAttr("style");
  });


$('#UfB').on('mouseover', function () {
  $(this).siblings().css({ 'display': 'block' }).on('mouseleave', function () {
    $(this).css({ 'display': 'none' });
  })
})
$('#ToU').on('mouseover', function () {
  $(this).siblings().css({ 'display': 'block' }).on('mouseleave', function () {
    $(this).css({ 'display': 'none' })
  })
})
