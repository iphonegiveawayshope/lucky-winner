$(document).ready(function () {

    // ! Timer Clock Script
    $("#clock").countdown("2020/7/2", function (event) {
        let $this = $(this).html(event.strftime(""
            // +"<div><span>%W</span><span>Weeks</span></div>"
            + '<div class="day_div"><span>%D</span><span>Days</span></div>'
            + '<div class="hour_div"><span>%H</span><span>Hours</span></div>'
            + '<div class="minute_div"><span>%M</span><span>Minutes</span></div>'
            + '<div class="secund_div"><span>%S</span><span>Second</span></div>'
        ));
    });

    //! Counter Time Js
    // $('.count_up').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    // ! Add Animation Class
    $(".button").waypoint(function (direction) {
        $("button").addClass("animate__shakeX")
    }, {
        offset : "40px"
    });

});   //Ready Function

