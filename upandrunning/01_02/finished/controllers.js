var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
   
    $scope.author = {
        'name'      : 'Rob Wright',
        'title'     : 'Guitarist',
        'company'   : 'Dr Thealegood'
    };
    
});