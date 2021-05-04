$(".owl-one").owlCarousel({
  loop: true,
  dots:false,
  nav:true,
  margin: 10,
  responsive:{
    0: {
      items: 3
    },
    1440: {
      items:4
    }
  },
});

// $(document).ready(function () {
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
// });

$('[data-toggle="popover"]').on("show.bs.popover", function () {
  $('[data-toggle="popover"]').popover("hide");
});
