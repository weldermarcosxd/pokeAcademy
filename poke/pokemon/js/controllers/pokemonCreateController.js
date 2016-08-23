(function() {
    'use strict';

    angular
        .module('Pokemon')
        .controller('pokemonsCreateController', ['PokemonService', pokemonsCreateController]);

    /* @ngInject */
    function pokemonsCreateController(PokemonService) {

        /*jshint validthis: true */
        var vm = this;

        vm.create  = create;
        function create(pokemon) {
            UsersService.create(pokemon)
                .then(function(data) {
                    vm.pokemons.push(data.data);
                    console.log('pokemon: ', JSON.stringify(data.data));
                });
        }

    }
})();
