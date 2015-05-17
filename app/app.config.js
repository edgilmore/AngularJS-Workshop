/**
 * Created by edgilmore on 5/17/2015.
 */
(function () {
    angular.module('app')
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            controller: 'MoviesController',
            templateUrl: 'views/movies.html',
            controllerAs: 'vm'
        })
        .when('tickets/:id', {
            controller: 'TicketsController',
            templateUrl: 'views/tickets.html',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'})
    });
})();