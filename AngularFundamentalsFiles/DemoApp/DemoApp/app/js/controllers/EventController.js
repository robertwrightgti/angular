'use strict';

eventsApp.controller('EventController',
    function ($scope, eventDataService) {

        $scope.sortOrder = "name";
        $scope.event = eventDataService.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            if(session.upVoteCount >0) {
                session.upVoteCount--;
            }
        }

        $scope.createEvent = function() {
            window.location = "/NewEvent.html";
        }
      }
);