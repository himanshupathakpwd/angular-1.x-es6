
function pokemonListCtrl() {
  const $ctrl = this;
  console.log($ctrl);
}

module.exports = {
  template: require('./pokemon-list.html'),
  controller: pokemonListCtrl,
  bindings: {
    pokemons: '='
  }
}
