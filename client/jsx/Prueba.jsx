var m = require('mithril');
var Navbar = require('../components/Navbar.js');

var Prueba = module.exports = {
  controller: function(){
    m.redraw.strategy("diff");
    var ctrl = this;
    var i = 0;
    //m.startComputation();
    ctrl.contador = 0;
    ctrl.navbar = new Navbar.controller();

    // setInterval(function () {
    //   ctrl.contador = i;
    //   i++;
    //   console.log(i)
    //   m.endComputation();
    // }, 1000)

    ctrl.saluda = 'Hola, soy yo';

    ctrl.nombre = m.prop("");

    ctrl.enviar = function (e) {
      e.preventDefault();
      m.request({
        method: 'POST',
        url: '/nombre',
        data: {nombre:ctrl.nombre},
        unwrapSuccess: function(res) {
         console.log(res)
        }
      })
    }
  },
  
  view: function(ctrl){
    return <div>
            {Navbar.view(ctrl.navbar)}
            <div class="container">
            <h1>Ahora si</h1>
            <h2>Somos nosotros!</h2>
            <h3>Contador:</h3>
            <p>{ctrl.contador}</p>
            <p>{ctrl.saluda}</p>
              <form>
              <label for="nombre">Nombre</label>
              <input type="text" onchange={m.withAttr("value", ctrl.nombre)} value={ctrl.nombre()} placeholders="Escribi tu nombre"></input>
              <button onclick={ctrl.enviar.bind(ctrl)}>Enviar</button>
              <span>{ctrl.nombre()}</span>
              </form>
            </div>
          </div>

    
  }
}