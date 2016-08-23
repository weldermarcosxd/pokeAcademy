(function() {
    'use strict';

    angular
        .module('Pokemon')
        .config(['$routeProvider', '$locationProvider', config]);

    /* @ngInject */
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/pokemon', {
                templateUrl: 'pokemon/views/pokemon-list.html',
                controller: 'pokemonReadController',
                controllerAs: 'pokemonRead'
            })
            .when('/pokemon/create', {
                templateUrl: 'pokemon/views/pokemon-create.html',
                controller: 'pokemonCreateController',
                controllerAs: 'pokemonCreate'
            })
            .when('/pokemon/update/:id', {
                templateUrl: 'pokemon/views/pokemon-list.html',
                controller: 'pokemonUpdateController',
                controllerAs: 'pokemonUpdate'
            })
            .when('/pokemon/delete/:id', {
                templateUrl: 'pokemon/views/pokemon-list.html',
                controller: 'pokemonDeleteController',
                controllerAs: 'pokemonDeleteController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
