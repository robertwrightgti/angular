var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', function ($scope, $http) {
    $http.get('js/data.json')
        .success(function(data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
        });
});

artistControllers.controller('DetailsController', function ($scope, $http, $routeParams) {
    $http.get('js/data.json')
        .success(function(data) {
            $scope.artists = data;
            $scope.whichItem = $routeParams.itemId;
        });
});
 