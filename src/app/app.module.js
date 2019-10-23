import angular from 'angular'
import uirouter from 'angular-ui-router'

import ngreact from 'ngreact'
import routes from './app.routes'
import pokemons from './pokemons'
import demo from './demo'

import ReactComponents from './react/components'

const app = angular.module('pokemonPoc', [ngreact.name, uirouter, pokemons, demo])
  .config(routes)

Object.keys(ReactComponents).forEach(name => {
  app.value(name, ReactComponents[name])
})

