/**
 * Created by edgilmore on 5/17/2015.
 */
(function(){
    'use strict';
    angular.module('app').factory('dataService', dataService);

    function dataService($http){
        function getMovies(){
            return $http.get('movies.json')
                .then(function(data){
                    return data.movies;
                });
        }

        return {
            getMovies: getMovies
        };
    }
})();