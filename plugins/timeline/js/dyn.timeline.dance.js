/*

 Dynamic Plugin - Timeline - dynamic.js -  - dynamic responsive content delivery
 file: js/dynamic/plugins/timeline/js/dyn.timeline.news.js
 version: 0.0.1
 (c) 2014 Sven Krong ~ SKP Studios / http://www.skpstudios.com

 Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
 Commercial use requires attribution.

 */

if (typeof Dynamic === "undefined") { throw new Error(" the dyn.timeline.news plugin requires Dynamic") }

var Timeline = Timeline || {};
(function (app, win) {

  // debugging vars
  var debug = {
    view: false,
    log: true,
    ver: false,
    brand: true
  };

  var version = '0.0.1';

  if(debug.ver){console.log('--> dyn.timeline.dance plugin version: %o', version)}

  if(debug.ver){console.log('--> create dmq timeline object')}

  // dynamic definition
  var dmq = {
    desk: {
      base: 'desk',
      dyn: 'desk',
      width: 1240,
      height: 650,
      imagesWidth: 19838,
      imagesHeight: 500,
      m0: 20,
      m1: 177,
      m2: 354,
      m3: 531,
      m4: 709,
      m5: 930,
      m6: 1100,
      m7: 1210
    },
    book: {
      la: {
        base: 'tablet',
        dyn: 'book',
        width: 1140,
        height: 475,
        imagesWidth: 12898,
        imagesHeight: 325,
        m0: 20,
        m1: 177,
        m2: 354,
        m3: 500,
        m4: 680,
        m5: 886,
        m6: 1000,
        m7: 1110
      },
      po: {
        base: 'tablet',
        dyn: 'book',
        width: 960,
        height: 475,
        imagesWidth: 3355,
        imagesHeight: 325,
        m0: 20,
        m1: 177,
        m2: 354,
        m3: 500,
        m4: 680,
        m5: 886,
        m6: 1000,
        m7: 1110
      }


    },
    tablet: {
      stla: {
        base: 'tablet',
        dyn: 'book',
        width: 1140,
        height: 475,
        imagesWidth: 4975,
        imagesHeight: 325,
        m0: 20,
        m1: 177,
        m2: 354,
        m3: 500,
        m4: 680,
        m5: 886,
        m6: 1000,
        m7: 1110
      },
      stpo: {
        base: 'tablet',
        dyn: 'book',
        width: 1140,
        height: 475,
        imagesWidth: 4975,
        imagesHeight: 325,
        m0: 20,
        m1: 177,
        m2: 354,
        m3: 500,
        m4: 680,
        m5: 886,
        m6: 1000,
        m7: 1110
      },
      tala: {
        base: 'tablet',
        dyn: 'tablet',
        width: 980,
        height: 475,
        imagesWidth: 12898,
        imagesHeight: 325,
        m0: 20,
        m1: 160,
        m2: 300,
        m3: 420,
        m4: 580,
        m5: 740,
        m6: 860,
        m7: 950
      },
      tapo: {
        base: 'tablet',
        dyn: 'tablet',
        width: 700,
        height: 475,
        imagesWidth: 12898,
        imagesHeight: 325,
        m0: 20,
        m1: 120,
        m2: 210,
        m3: 300,
        m4: 400,
        m5: 514,
        m6: 600,
        m7: 670
      },
      t1la: {},
      t1po: {},
      t2la: {},
      t2po: {},
      t3la: {},
      t3po: {}
    },

    phone: {
      la: {
        base: 'phone',
        dyn: 'phone',
        width: 980,
        height: 375,
        imagesWidth: 8928,
        imagesHeight: 225,
        m0: 20,
        m1: 160,
        m2: 300,
        m3: 420,
        m4: 580,
        m5: 740,
        m6: 860,
        m7: 950
      },
      po: {
        base: 'phone',
        dyn: 'phone',
        width: 600,
        height: 375,
        imagesWidth: 8928,
        imagesHeight: 225,
        m0: 20,
        m1: 100,
        m2: 180,
        m3: 255,
        m4: 355,
        m5: 445,
        m6: 520,
        m7: 570
      }
    },
    archoid: {
      la: {
        base: 'archoid',
        dyn: 'archoid'
      },
      po: {
        base: 'archoid',
        dyn: 'archoid'
      }
    }
  };


  var def = {
    dela: dmq.desk,
    depo: dmq.desk,
    bola: dmq.book.la,
    bopo: dmq.book.po,
    stla: dmq.tablet.stla,
    stpo: dmq.tablet.stpo,
    tala: dmq.tablet.tala,
    tapo: dmq.tablet.tapo,
    t1la: dmq.tablet.tala,
    t1po: dmq.tablet.tapo,
    t2la: dmq.tablet.tala,
    t2po: dmq.tablet.tapo,
    t3la: dmq.tablet.tala,
    t3po: dmq.tablet.tapo,
    pala: dmq.tablet.tala,
    papo: dmq.tablet.tapo,
    pola: dmq.phone.la,
    popo: dmq.phone.po,
    whla: dmq.phone.la,
    whpo: dmq.tablet.tapo,
    wlla: dmq.archoid.la,
    wlpo: dmq.archoid.po,
    arla: dmq.archoid.la,
    arpo: dmq.archoid.po
  };

  var data = {
    lgla: def.dela,
    lgpo: def.depo,
    smla: def.bola,
    smpo: def.bola,
    utla: def.bola,
    utpo: def.bola,
    nbla: def.bola,
    nbpo: def.bola,
    stla: def.stla,
    stpo: def.stpo,
    tala: def.tala,
    tapo: def.tapo,
    t1la: def.t1la,
    t1po: def.t1po,
    t2la: def.t2la,
    t2po: def.t2po,
    t3la: def.t3la,
    t3po: def.t3po,
    pala: def.pala,
    papo: def.papo,
    pola: def.pola,
    popo: def.popo,
    whla: def.whla,
    whpo: def.whpo,
    wlpo: def.wlpo,
    arla: def.arla,
    arpo: def.arpo
  };

  if(debug.ver){console.log('--> dyn: %o', dyn)}

  dyn.plugin.init('timeline', 'dance', data);

  if(debug.ver){console.log('--> dyn.plugins.timeline.dance set - dyn.plugins.timeline.dance: %o', dyn.plugins.timeline.dance)}

  if ( typeof define === "function" && define.amd ) {
    define( "Timeline", [], function () { return app; } );
  }

})(Timeline, window);