'use strict';

eventsApp.controller('EventController',
    function ($scope) {

        $scope.sortOrder = "name";

        $scope.event = {
            name: "Angular boot camp",
            date: "1 Aug 2016",
            time: "12.30",
            location: {
                address: "Google headquarters",
                city: "mountain View",
                province: "CA"
            },
            imageUrl: "/img/angularjs-logo.png",
            sessions: [
                {
                    name: "Starting stuff",
                    creatorName: "Bob Fleming",
                    duration: 1,
                    level: "Beginner",
                    abstract: "You know nothing.  You will LISTEN.",
                    upVoteCount: 0
                },
                {
                    name: "Getting better",
                    creatorName: "Kenny Sansom",
                    duration: 2,
                    level: "Intermediate",
                    abstract: "You think you know it - but you don't.",
                    upVoteCount: 0
                },
                {
                    name: "Rocking that shit",
                    creatorName: "Iain Sharples",
                    duration: 4,
                    level: "Advanced",
                    abstract: "I will crush your minds with code.",
                    upVoteCount: 0
                }
            ]
        };

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