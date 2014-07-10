/*

 Dynamic - dynamic.js -  - dynamic responsive content delivery
 file: js/dynamic/dynamic.js
 version: 0.0.1
 (c) 2014 Sven Krong ~ SKP Studios / http://www.skpstudios.com

 Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
 Commercial use requires attribution.

 */

if (typeof Dynamic === "undefined") { throw new Error("Timeline requires Dynamic") }

var Pretty = Pretty || {};
(function (app, win) {

  // debugging vars
  var debug = {
    view: false,
    log: true,
    ver: false,
    brand: true
  };

  var version = '0.0.1';

  if(debug.ver){console.log('--> pretty plugin version: %o', version)}


  if(debug.ver){console.log('--> create dmq pretty object')}

  // dynamic definition - shell definition

  var base = 600;

  var data = {
    lgla: {base: base},
    lgpo: {base: base},
    smla: {base: base},
    smpo: {base: base},
    utla: {base: base},
    utpo: {base: base},
    nbla: {base: base},
    nbpo: {base: base},
    stla: {base: base *.8},
    stpo: {base: base *.6},
    tala: {base: base*.8},
    tapo: {base: base *.6},
    t1la: {base: base*.8},
    t1po: {base: base *.6},
    t2la: {base: base*.8},
    t2po: {base: base *.6},
    t3la: {base: base*.8},
    t3po: {base: base *.6},
    pala: {base: base *.8},
    papo: {base: base *.6},
    pola: {base: base *.6},
    popo: {base: base *.4},
    whla: {base: base *.8},
    whpo: {base: base *.6},
    wlla: {base: base *.6},
    wlpo: {base: base *.4},
    arla: {base: base *.6},
    arpo: {base: base *.4}
  };

  if(debug.ver){console.log('--> dyn: %o', dyn)}

  dyn.plugin.init('pretty', 'main', data);
  dyn.ratio.init('pretty', 'main', data);

  if(debug.ver){console.log('--> dyn.plugin.init - dyn.plugins.pretty.main: %o', dyn.plugins.pretty.main)}


  if ( typeof define === "function" && define.amd ) {
    define( "Pretty", [], function () { return app; } );
  }

})(Pretty, window);