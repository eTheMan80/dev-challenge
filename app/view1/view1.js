'use strict';

angular.module('templateStore.view1', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/hemingway.json').success(function(data) {
    $scope.templates = data.results;
  });
}]);
