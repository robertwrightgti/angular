'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.saveEvent = function(event, newEventForm) {
            console.log(event, newEventForm);

            if(newEventForm.$valid) {
                alert("Saving...");
            }


        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        };

    }
);
