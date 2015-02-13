var m = require('mithril');
var Navbar = require('../components/Navbar.js');

var Prueba = module.exports = {
  controller: function(){
    var ctrl = this;
    ctrl.navbar = new Navbar.controller();

  },
  
  view: function(ctrl){
    return <div>
      {Navbar.view(ctrl.navbar)}
      <div class="container">
        <h1>Ahora si</h1>
        <h2>Somos nosotros!</h2>
      </div>
      </div>
      
  }
}