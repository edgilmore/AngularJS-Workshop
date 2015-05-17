/**
 * Created by edgilmore on 5/17/2015.
 */
(function(){
    angular
        .module('app')
        .controller('TicketsController', TicketsController);
        function TicketsController($routeParams){
            var vm = this;
            vm.title = 'Tickets';
            vm.name = $routeParams.id;
        }
})();