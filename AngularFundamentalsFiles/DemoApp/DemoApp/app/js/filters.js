'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch(duration) {
            case 1:
                return "Half an hour";
                break;
            case 2:
                return "1 hour";
                break;
            case 3:
                return "Half a day";
                break;
            case 4:
                return "Full day";
            break;
        }
    }
})