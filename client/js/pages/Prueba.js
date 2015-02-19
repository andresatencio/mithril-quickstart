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
      return m.request({
        method: 'POST',
        url: '/nombre',
        data: {nombre:ctrl.nombre},
        unwrapSuccess: function(res) {
          return console.log(res)
        }
      })
    }
  },
  
  view: function(ctrl){
    return {tag: "div", attrs: {}, children: [
            Navbar.view(ctrl.navbar),
            {tag: "div", attrs: {class:"container"}, children: [
            {tag: "h1", attrs: {}, children: ["Ahora si"]}, 
            {tag: "h2", attrs: {}, children: ["Somos nosotros!"]}, 
            {tag: "h3", attrs: {}, children: ["Contador:"]}, 
            {tag: "p", attrs: {}, children: [ctrl.contador]}, 
            {tag: "p", attrs: {}, children: [ctrl.saluda]}, 
              {tag: "form", attrs: {}, children: [
              {tag: "label", attrs: {for:"nombre"}, children: ["Nombre"]}, 
              {tag: "input", attrs: {type:"text",onchange:m.withAttr("value", ctrl.nombre),value:ctrl.nombre(),placeholders:"Escribi tu nombre"}}, 
              {tag: "button", attrs: {onclick:ctrl.enviar.bind(ctrl)}, children: ["Enviar"]}, 
              {tag: "span", attrs: {}, children: [ctrl.nombre()]}
              ]}
            ]}
          ]}

    
  }
}