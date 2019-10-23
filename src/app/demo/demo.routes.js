routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('demo', {
      url: '/demo',
      template: require('./demo.html'),
    })
    .state('demo.react', {
      url: '/react',
      template: require('./react.html'),
    })
    .state('demo.react.hello', {
      url: '/hello',
      template: `<react-component name="HelloComponent" props="helloController.person" watch-depth="reference" />`,
      controller: function () {
        const $ctrl = this
        $ctrl.person = { fname: 'Himanshu', lname: 'Pathak' }
        console.log($ctrl)
      },
      controllerAs: 'helloController'
    }).state('demo.react.footer', {
      template: `<react-component name="PokemonFooter" />`
    })
}

// const views = {
//   main: {
//     template: require('./react.html'),
//   },
//   'hello@demo.react': {
//     template: `<react-component name="HelloComponent" props="helloController.person" watch-depth="reference" />`,
//     controller: function () {
//       const $ctrl = this
//       $ctrl.person = { fname: 'Himanshu', lname: 'Pathak' }
//       console.log($ctrl)
//     },
//     controllerAs: 'helloController'
//   },
//   'footer@demo.react': {
//     template: `<react-component name="PokemonFooter" />`
//   }
// }
