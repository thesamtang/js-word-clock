(function(clockJS, $, undefined) {
    
    var currentTime, hour, minute;
    
    clockJS.updateTime = function() {
        currentTime = new Date();
        hour = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours();
        minute = currentTime.getMinutes();
        
        console.log(hour + ' ' + minute);
    }
    
    
}(window.clockJS = window.clockJS || {}, jQuery));

clockJS.updateTime();
