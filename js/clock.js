'use strict';

$(document).ready(function () {
    (function (clockJS, $, undefined) {

        var currentTime, hour, minute;

        clockJS.updateTime = function () {
            currentTime = new Date();
            hour = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours();
            minute = currentTime.getMinutes();

            console.log(hour + ' ' + minute);

            // on the hour
            if (minute >= 58) {
                $('.oclock').addClass('active');
                $('.five').removeClass('active');
                $('.to').removeClass('active');
                
                $('.' + hour.toString()).removeClass('active');
                $('.' + (hour + 1).toString()).addClass('active');
            } 
            // five to
            else if (minute >= 52) {
                $('.ten').removeClass('active');
                $('.five').addClass('active');
                $('.to').addClass('active');
                
                $('.' + (hour + 1).toString()).addClass('active');
            }
            //ten to
            else if (minute >= 49) {
                $('.quarter').removeClass('active');
                $('.ten').addClass('active');
                $('.to').addClass('active');
                
                $('.' + (hour + 1).toString()).addClass('active');
            }
            // quarter to
            else if (minute >= 43) {
                $('.twenty').removeClass('active');
                $('.quarter').addClass('active');
                $('.to').addClass('active');
                $('.a').addClass('active');
                
                $('.' + (hour + 1).toString()).addClass('active');
            }
            // twenty to
            else if (minute >= 36) {
                $('.half').removeClass('active');
                $('.twenty').addClass('active');
                $('.past').removeClass('active');
                $('.to').addClass('active');
                
                $('.' + hour.toString()).removeClass('active');
                $('.' + (hour + 1).toString()).addClass('active');
            }
            // half past
            else if (minute >= 26) {
                $('.twenty').removeClass('active');
                $('.half').addClass('active');
                $('.past').addClass('active');
                
                $('.' + (hour).toString()).addClass('active');
            }
            // twenty past
            else if (minute >= 19) {
                $('.quarter').removeClass('active');
                $('.twenty').addClass('active');
                $('.past').addClass('active');
                
                $('.' + (hour).toString()).addClass('active');
            }
            // quarter past
            else if (minute >= 13) {
                $('.ten').removeClass('active');
                $('.quarter').addClass('active');
                $('.past').addClass('active');
                $('.a').addClass('active');
                
                $('.' + (hour).toString()).addClass('active');
            }
            // ten past
            else if (minute >= 9) {
                $('.five').removeClass('active');
                $('.ten').addClass('active');
                $('.past').addClass('active');
                
                $('.' + (hour).toString()).addClass('active');
            }
            // five past
            else if (minute >= 3) {
                $('.oclock').removeClass('active');
                $('.five').addClass('active');
                $('.past').addClass('active');
                
                $('.' + (hour).toString()).addClass('active');
            }
            // on the hour
            else {
                $('.oclock').addClass('active');
                $('.' + (hour).toString()).addClass('active');
            }
        }
    }(window.clockJS = window.clockJS || {}, jQuery));

    clockJS.updateTime();

});