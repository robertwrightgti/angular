var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope, $http) {

    $http.get('js/data.json')
        .success(function(data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
        });
    
        
});

 