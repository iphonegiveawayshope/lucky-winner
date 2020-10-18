$(document).ready(function () {

    // ! Timer Clock Script
    $("#clock").countdown("2020/11/1", function (event) {
        let $this = $(this).html(event.strftime(""
            // +"<div><span>%W</span><span>Weeks</span></div>"
            + '<div class="day_div"><span class="ctt">%D</span><span class="txt">Days</span></div>'
            + '<div class="hour_div"><span class="ctt">%H</span><span class="txt">Hours</span></div>'
            + '<div class="minute_div"><span class="ctt">%M</span><span class="txt">Minutes</span></div>'
            + '<div class="secund_div"><span class="ctt">%S</span><span class="txt">Second</span></div>'
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

// ! Redirect Function
function Redirect() { 
    window.location = "https://cpbldi.com/28d9489";
} 
