(function() {
    'use strict';

    angular
        .module('Pokemon')
        .controller('pokemonReadController', ['PokemonService', pokemonReadController]);

    /* @ngInject */
    function pokemonReadController(PokemonService) {

        /*jshint validthis: true */
        var vm = this;

        vm.findList = findList;

        vm.findList();

        function findList() {
            PokemonService.findList()
                .then(function(data) {
                    vm.pokemon = data.data;
                });
        }
    }
})();
