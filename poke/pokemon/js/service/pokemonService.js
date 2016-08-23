(function() {
    'use strict';

    angular
        .module('Pokemon')
        .service('PokemonService', PokemonService);

    PokemonService.$inject = ['$http'];

    /* @ngInject */
    function PokemonService($http) {
         var BASE_URL = 'http://localhost:3000/api/pokemons';

         this.create = create;
         this.findList = findList;
         this.find = find;
         this.edit = edit;
         this.remove = remove;

         function create(user) {
             var request = {
                 url: BASE_URL,
                 method: 'POST',
                 data: user
             };
             return $http(request);
        }

        function findList() {
            var request = {
                url: BASE_URL,
                method: 'GET'
            };
            return $http(request);
        }

        function find(id) {
            var request = {
                url: BASE_URL + id,
                method: 'GET',
            };
            return $http(request);
        }

        function edit(user,id) {
            var request = {
                url: BASE_URL + id,
                method: 'PUT',
                data: user
            };
            return $http(request);
        }

        function remove(id){
            var request = {
                url: BASE_URL + id,
                method: 'DELETE'
            };
            return $http(request);
        }
    }
})();
