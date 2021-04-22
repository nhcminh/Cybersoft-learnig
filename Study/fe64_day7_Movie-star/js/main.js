$(document).ready(function() {
    //reset active class
    var arr = document.querySelectorAll("#comingsoon_list_tab .slick-slide .nav-link");
    arr.forEach(function(item) {
        item.addEventListener('click', function() {
            arr.forEach(function(item) {
                item.classList.remove('active');
                item.removeAttribute('event-listener');

            })
            item.setAttribute('event-listener', 'click');

        })

    })


    // nav-fix!
    var navbar = document.getElementById('navbar');
    var comingsoon = document.getElementById('incoming');
    ['scroll','scrollstart','scrollend'].forEach(function(e){
        window.addEventListener(e, function() {
            // if (window.pageYOffset >= 250) {
                navbar.classList.add('fixed');
                if (window.pageYOffset >= comingsoon.offsetTop) {
                    navbar.classList.add('fixed');
                    navbar.style.top = 0;
                    navbar.style.visibility = 'visible';
                    navbar.style.transition = "all 0.5s";
                } 
                else if (window.pageYOffset < comingsoon.offsetTop && window.pageYOffset > 250) {
                    navbar.style.top = "-200px";
                    navbar.style.visibility = "hidden"
                }
            // } 
            else {
                navbar.classList.remove('fixed');
                navbar.style.removeProperty('top');
                navbar.style.removeProperty('visibility');
                navbar.style.removeProperty('transition');
            }
        })
    });
    
        // console.log(navbar.offsetTop);
        // console.log(comingsoon.offsetTop);

    if (window.innerWidth < 576) {
        // document.getElementById('header-container').classList.remove('container');
        // document.getElementById('navbar-container').classList.remove('container');
        document.getElementById('navbar-container').classList.add('justify-content-between');
    }else {
        document.getElementById('header-container').classList.remove('container');
        document.getElementById('header-container').classList.add('container');
    }
})