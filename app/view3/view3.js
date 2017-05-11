'use strict';

angular.module('templateStore.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/view3', {
      templateUrl:'view3/view3.html',
      controller:'TemplatesCtrl'
    });
}])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/shakespeare.json').success(function(data) {
    $scope.templates = data.results;
  });
}]);
