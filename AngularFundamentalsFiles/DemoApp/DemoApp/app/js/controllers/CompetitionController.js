'use strict';

competitionApp.controller('CompetitionController',
    function ($scope) {

        var vm = this;
        $scope.winner = null;

        //init
        vm.init = function () {

            //init each person
            vm.people.forEach(function (person) {

                //assign tasks (inc gender-specific tasks)
                var tasks = _.filter(vm.tasks, function (obj) {
                    return obj.gender == null || obj.gender == person.gender;
                });
                person.tasks = _.map(tasks, _.clone);

                person.imageName = "start.jpg";
                person.imageUrl = function() {
                    if ($scope.winner != null && $scope.winner != person.name) {
                        person.imageName = "loser.jpg";
                    }
                    return person.imagePath + person.imageName;
                }
            });

            //public properties
            $scope.people = vm.people;
        };

        //public methods
        $scope.toggleTask = function(task, person) {
            task.complete = !task.complete;
            vm.updateStatus(person);
        };

        //private methods
        vm.updateStatus = function(person) {
            var numberOfTasks = person.tasks.length;
            var numberOfTasksCompleted = _.filter(person.tasks, function(task) {
                return task.complete == true
            }).length;
            if (numberOfTasksCompleted == 0) {
                person.imageName = "start.jpg";
                if($scope.winner == person.name) { $scope.winner = null }
            }
            if (numberOfTasksCompleted > 0 && numberOfTasksCompleted < numberOfTasks) {
                person.imageName = "smile.jpg";
                if($scope.winner == person.name) { $scope.winner = null }
            }
            if (numberOfTasksCompleted == numberOfTasks) {
                person.imageName = "winner.jpg";
                $scope.winner = person.name;
            }
        }

        //private properties
        vm.people = [
            {
                "name": "Ruby",
                "gender": "female",
                "imagePath": "img/competition/ruby/"
            },
            {
                "name": "Leo",
                "gender": "male",
                "imagePath": "img/competition/leo/"
            }
        ]

        vm.tasks = [
            {
                "name": "Get dressed",
                "complete": false,
                "sortOrder": 1
            },
            {
                "name": "Breakfast",
                "complete": false,
                "sortOrder": 2
            },
            {
                "name": "Brush teeth",
                "complete": false,
                "sortOrder": 3
            },
            {
                "name": "Brush hair",
                "complete": false,
                "sortOrder": 4,
                "gender": "female"
            },
            {
                "name": "Toilet",
                "complete": false,
                "sortOrder": 5
            },
            {
                "name": "Shoes",
                "complete": false,
                "sortOrder": 6
            },
            {
                "name": "Coat",
                "complete": false,
                "sortOrder": 7
            }
        ];

        vm.init();
    }
);