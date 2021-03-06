angular.module('SearchApp', ['ngRoute', 'RouteControllers', 'UserService']);

angular.module('SearchApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes

    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/recipes', {
        templateUrl: 'templates/recipes.html'
    })
    .when('/howTo', {
        templateUrl: 'templates/howto.html',
        controller: 'HowToController'
    });
});
