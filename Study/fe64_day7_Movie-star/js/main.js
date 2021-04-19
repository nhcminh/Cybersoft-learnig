$(document).ready(function() {
    var arr = document.querySelectorAll("#comingsoon_list_tab .slick-slide .nav-link");
    // var active = document.querySelectorAll("#comingsoon_list_tab .slick-slide .active");
    // console.log(arr);
    // console.log(active);
    arr.forEach(function(item) {
        item.addEventListener('click', function() {
            // if (item.classList.contains('active')) {
            // item.classList.add('active');
            // console.log("true")

            // }

            arr.forEach(function(item) {
                item.classList.remove('active');
                item.removeAttribute('event-listener');

            })
            item.setAttribute('event-listener', 'click');

        })

    })
})