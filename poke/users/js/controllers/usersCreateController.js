(function() {
    'use strict';

    angular
        .module('Users')
        .controller('usersCreateController', ['UsersService', usersCreateController]);

    /* @ngInject */
    function usersCreateController(UsersService) {

        /*jshint validthis: true */
        var vm = this;

        vm.create  = create;
        function create(user) {
            UsersService.create(user)
                .then(function(data) {
                    vm.users.push(data.data);
                    console.log('user: ', JSON.stringify(data.data));
                });
        }

    }
})();
