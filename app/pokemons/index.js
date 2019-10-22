import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './pokemons.routes.js'
import pokemonList from './pokemon-list/pokemon-list.component'
import PokemonsService from './pokemons.service'
import Header from './pokemon-header/pokemon-header.component'

export default angular.module('pokemonPoc.pokemons', [uirouter])
  .config(routes)
  .component('pokemonHeader', Header)
  .component('pokemonList', pokemonList)
  .service('PokemonsService', PokemonsService)
  .name
