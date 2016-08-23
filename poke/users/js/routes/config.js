(function() {
    'use strict';

    angular
        .module('Users')
        .config(['$routeProvider', '$locationProvider', config]);

    /* @ngInject */
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'users/views/users-list.html',
                controller: 'usersReadController',
                controllerAs: 'usersRead'
            })
            .when('/users/create', {
                templateUrl: 'users/views/users-create.html',
                controller: 'usersCreateController',
                controllerAs: 'usersCreate'
            })
            .when('/users/update/:id', {
                templateUrl: 'users/views/users-list.html',
                controller: 'usersUpdateController',
                controllerAs: 'usersUpdate'
            })
            .when('/users/delete/:id', {
                templateUrl: 'users/views/users-list.html',
                controller: 'usersDeleteController',
                controllerAs: 'usersDeleteController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
