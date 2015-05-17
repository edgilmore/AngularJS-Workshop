/**
 * Created by edgilmore on 5/17/2015.
 */
'use strict';

// IIFE = immediately invoked function expression
(function () {
    // every global variable inside of here, goes away after it runs
    // cleans up
    angular
        .module('app')
        .controller('MoviesController', MoviesController);

    function MoviesController(dataService, $window){
        var vm = this;
        vm.movies = [];
        vm.title = 'My Awesome Angular App';
        vm.showSearchText = function () {
            vm.messages = vm.searchText;
        };

        function init(){
            dataService.getMovies()
            .then(function(){
                vm.movies = data;
            })
            .error(function(data, status, headers, config){
                //use a better error library such as toastrjs
                $window.alert(status);
            });
        }
        init();
    }
})();