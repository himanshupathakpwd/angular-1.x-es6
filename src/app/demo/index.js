import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './demo.routes.js'
const app = angular.module('pokemonPoc.demo', [uirouter])
  .config(routes)

export default app.name
