'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', [
  'ngRoute',
  'webApp.home',
  'webApp.panel',
  'webApp.search'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    });
  
  if(window.history && window.history.pushState){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

}]);
;'use strict'

angular.module('webApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.title = "Inicio";

	$http.get('app/json/familias.json').success(function(data){
		$scope.familias = data;
	});

}]);

;'use strict'

angular.module('webApp.panel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/panel', {
    templateUrl: 'app/panel/panel.html',
    controller: 'PanelCtrl'
  });
}])

.controller('PanelCtrl', [function() {

}]);;'use strict'

angular.module('webApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'app/search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.title = "Searching...";

}]);