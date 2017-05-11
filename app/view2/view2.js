'use strict';

angular.module('templateStore.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/dickens.json').success(function(data) {
    $scope.templates = data.results;
  });
}]);
