function HeaderCtrl() {
  console.log(this);
}

module.exports = {
  template: `<h2>Pokemon Header</h2>`,
  controller: HeaderCtrl,
  bindings: {
  }
}
