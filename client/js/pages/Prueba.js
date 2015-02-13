var m = require('mithril');
var Navbar = require('../components/Navbar.js');

var Prueba = module.exports = {
  controller: function(){
    var ctrl = this;
    ctrl.navbar = new Navbar.controller();

  },
  
  view: function(ctrl){
    return {tag: "div", attrs: {}, children: [
      Navbar.view(ctrl.navbar),
      {tag: "div", attrs: {class:"container"}, children: [
        {tag: "h1", attrs: {}, children: ["Ahora si"]}, 
        {tag: "h2", attrs: {}, children: ["Somos nosotros!"]}
      ]}
      ]}
      
  }
}