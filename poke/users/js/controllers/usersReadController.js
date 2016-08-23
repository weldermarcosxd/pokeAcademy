(function() {
    'use strict';

    angular
        .module('Users')
        .controller('usersReadController', ['UsersService', usersReadController]);

    /* @ngInject */
    function usersReadController(UsersService) {

        /*jshint validthis: true */
        var vm = this;

        vm.findList = findList;

        vm.findList();

        function findList() {
            UsersService.findList()
                .then(function(data) {
                    vm.users = data.data;
                });
        }
    }
})();
