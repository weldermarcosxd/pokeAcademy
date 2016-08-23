(function() {
    'use strict';

    angular
        .module('poke', [
            'ngRoute',
            'Users',
            'Pokemon'
        ])
        .config(['$routeProvider', '$locationProvider', config]);

        function config($routeProvider, $locationProvider) {
            $routeProvider
              .when('/', {
                templateUrl: 'views/home.html'
              })
              .otherwise({redirectTo: '/'});
         }
})();
