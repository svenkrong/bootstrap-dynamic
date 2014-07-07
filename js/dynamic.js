/*

 Dynamic - dynamic.js -  - dynamic responsive content delivery
 file: js/dynamic/dynamic.js
 version: 0.0.1
 (c) 2014 Sven Krong ~ SKP Studios / http://www.skpstudios.com

 Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
 Commercial use requires attribution.

 */

// Testing!//

// Testing!//

if (typeof jQuery === "undefined") { throw new Error("Dynamic requires jQuery") }
if (typeof EJS === "undefined") { throw new Error("Dynamic requires jQuery") }

var Dynamic = Dynamic || {};
(function (app, win) {

  // debugging vars
  var debug = {
    view: false,
    log: true,
    ver: false,
    brand: true
  };

  var version = '0.0.1';

  if(debug.ver){console.log('--> dyn version: %o', version)}

  if(debug.ver){console.log('--> create dmq objects')}

// // dynamic definition - shell definition
/*  var _def = {
    lgla: {},
    lgpo: {},
    smla: {},
    smpo: {},
    utla: {},
    utpo: {},
    nbla: {},
    nbpo: {},
    stla: {},
    stpo: {},
    tala: {},
    tapo: {},
    t1la: {},
    t1po: {},
    t2la: {},
    t2po: {},
    t3la: {},
    t3po: {},
    pala: {},
    papo: {},
    pola: {},
    popo: {},
    whla: {},
    whpo: {},
    wlla: {},
    wlpo: {},
    arla: {},
    arpo: {}
  };*/

  // define core dmq object properties
  var dmq_data = {
    lgla: {
      code:'lg',
      title:'Large Desktop Landscape',
      orient:'la',
      base:'desk',
      dyn:'desk',
      minw: 105,
      maxh: ''
    },
    lgpo: {
      code:'lg',
      title:'Large Desktop Portrait',
      orient:'po',
      base:'desk',
      dyn:'desk',
      minw: 105,
      maxh: ''
    },
    smla: {
      code:'sm',
      title:'Small Desktop Landscape',
      orient:'la',
      base:'desk',
      dyn:'book',
      minw: 80,
      maxh: 64
    },
    smpo: {
      code:'sm',
      title:'Small Desktop Portrait',
      orient:'po',
      base:'desk',
      dyn:'book',
      minw: 80,
      maxh: 64
    },
    utla: {
      code:'ut',
      title:'Ultrabook-Tablet Landscape',
      orient:'la',
      base:'desk',
      dyn:'book',
      minw: 85,
      maxh: 48
    },
    utpo: {
      code:'ut',
      title:'Ultrabook-Tablet Portrait',
      orient:'po',
      base:'desk',
      dyn:'book',
      minw: 64,
      maxh: ''
    },
    nbla: {
      code:'nb',
      title:'Notebook Landscape',
      orient:'la',
      base:'desk',
      dyn:'book',
      minw: 64,
      maxh: ''
    },
    nbpo: {
      code:'nb',
      title:'Notebook Portrait',
      orient:'po',
      base:'desk',
      dyn:'book',
      minw: 64,
      maxh: ''
    },
    t1la: {
      code:'t1',
      title:'Tablet-1 Landscape',
      orient:'la',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    t1po: {
      code:'t1',
      title:'Tablet-1 Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    t2la: {
      code:'t2',
      title:'Tablet-2 Landscape',
      orient:'la',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    t2po: {
      code:'t2',
      title:'Tablet-2 Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    t3la: {
      code:'t3',
      title:'Tablet-3 Landscape',
      orient:'la',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    t3po: {
      code:'t3',
      title:'Tablet-3 Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    stla: {
      code:'st',
      title:'Small Tablet Landscape',
      orient:'la',
      base:'tablet',
      dyn:'tablet',
      minw: 37.5,
      maxh: ''
    },
    stpo: {
      code:'st',
      title:'Small Tablet Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 37.5,
      maxh: ''
    },
    pala: {
      code:'pa',
      title:'iPad Landscape',
      orient:'la',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    papo: {
      code:'pa',
      title:'iPad Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 64,
      maxh: ''
    },
    pola: {
      code:'po',
      title:'iPhone Landscape',
      orient:'la',
      base:'desk',
      dyn:'desk',
      minw: 48,
      maxh: 60
    },
    popo: {
      code:'po',
      title:'iPhone Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 48,
      maxh: 60
    },
    whla: {
      code:'wh',
      title:'Hi Win Phone Landscape',
      orient:'la',
      base:'tablet',
      dyn:'tablet',
      minw: 48,
      maxh: 80
    },
    whpo: {
      code:'wh',
      title:'Hi Win Phone Portrait',
      orient:'po',
      base:'tablet',
      dyn:'tablet',
      minw: 48,
      maxh: 80
    },
    wlla: {
      code:'wl',
      title:'Lo Win Phone Landscape',
      orient:'la',
      base:'tablet',
      dyn:'archoid',
      minw: 30,
      maxh: 50
    },
    wlpo: {
      code:'wl',
      title:'Lo Win Phone Portrait',
      orient:'po',
      base:'desk',
      dyn:'archoid',
      minw: 20,
      maxh: 50
    },
    arla: {
      code:'ar',
      title:'Archoid Landscape',
      orient:'la',
      base:'archoid',
      dyn:'archoid',
      minw: 20,
      maxh: ''
    },
    arpo: {
      code:'ar',
      title:'Archoid Portrait',
      orient:'po',
      base:'archoid',
      dyn:'archoid',
      minw: 20,
      maxh: ''
    }

  };

  // generate working object based on dmq_data
  // plug-ins add their object reference into...
  // which then uses the timeline doc.def to over ride
  // which will now use doc.def to extend dmq_set


  app.dmq = {};
  _.map(dmq_data, function (item, prop){
    if(debug.ver){console.log('--> gen dmq: prop %o item %o', prop, item)}
    app.dmq[prop] = _.clone(item);
  });

  if(debug.ver){console.log('--> created dmq objects:')}
  if(debug.ver){console.log('--> dmq_data: %o', dmq_data)}
  if(debug.ver){console.log('--> app.dmq: %o',  app.dmq)}


  // set reload_page to false
  app.reload_page = new State(false);

  // PLUGIN OBJECT
  // ToDo: convert aApp.section, sub1, sub2 to navbar plug-in?

  // create plug-in structures here - then break out into sep module files
  // create init() to hook "timeline" and timeline object into dmq

  app.plugin = {};
  app.plugins = {};

  app.plugin.init = function (plugin, object, data) {

    if (!app.plugins[plugin]) { app.plugins[plugin] = {} }

    app.plugins[plugin] = new Plugin(object, data);

    return app;
  };


  // RATIO OBJECT
  // object contains fields that need to be updated on dmq changes
  app.ratio = {};
  app.ratio.set = {};
  app.ratio.def = {};

  app.ratio.update = function (caller, match) {

    if(debug.ver){console.log('app.ratio.update - caller: %o match: %o', caller, match)}
    if(debug.ver){console.log('app.ratio.update - dmq: %o', mq.dmq)}

    var item = '';
    _.map(app.ratio.set, function (val, key){
      item = app.ratio.def[mq.dmq].base;
      app.ratio[val] = item;
      if(debug.log){console.log('update dmq: %o -> app.ratio[%o] = %o ', mq.dmq, key,  app.ratio[val])}
    });

  };

  app.ratio.init = function (field, base, data) {

    var item = data[mq.query + mq.orient];
    app.ratio[field] = new Field(item.base);
    app.ratio.set[field] = field;
    app.ratio.def = data;

    if(debug.ver){console.log('--> app.ratio.init: - app.ratio: %o', app.ratio)}

    return app;
  };


  // path     href link paths - adjust for directory structure
  // html     dom content
  // base     core asset paths ['desk', 'tablet', 'phone', 'archoid']
  // assets   base + '/' for pathing
  // dynamic  core css categories ['desk', 'book', 'tablet', 'phone', 'archoid']
  // orient   mobile device orientation for refined css
  // css      dynamic for desk, dynamic + orient for mobile
  // img      dynamic css selector for image classes

  // set debug info in brand copy
  (debug.brand) ? debug.menu = ' - <span id="debug-menu">code</span>' : debug.menu = '';

  // dynamic default definitions

  var def = {
    lgla: {base: 'desk', dyn: 'desk'},
    lgpo: {base: 'desk', dyn: 'desk'},
    smla: {base: 'desk', dyn: 'book'},
    smpo: {base: 'desk', dyn: 'book'},
    utla: {base: 'desk', dyn: 'book'},
    utpo: {base: 'desk', dyn: 'book'},
    nbla: {base: 'desk', dyn: 'book'},
    nbpo: {base: 'desk', dyn: 'book'},
    stla: {base: 'tablet', dyn: 'tablet'},
    stpo: {base: 'tablet', dyn: 'tablet'},
    tala: {base: 'tablet', dyn: 'tablet'},
    tapo: {base: 'tablet', dyn: 'tablet'},
    pala: {base: 'desk', dyn: 'tablet'},
    papo: {base: 'tablet', dyn: 'tablet'},
    pola: {base: 'tablet', dyn: 'tablet'},
    popo: {base: 'tablet', dyn: 'tablet'},
    whla: {base: 'tablet', dyn: 'tablet'},
    whpo: {base: 'tablet', dyn: 'tablet'},
    wlla: {base: 'archoid', dyn: 'archoid'},
    wlpo: {base: 'archoid', dyn: 'archoid'},
    arla: {base: 'archoid', dyn: 'archoid'},
    arpo: {base: 'archoid', dyn: 'archoid'}
  };


  // dynamic media query global - setting used for dynamic responsive content delivery
  var mq = {
    media: { // em set - defined viewport breakpoints and dynamic media queries
      'Large Desktop': 'lg',
      'Small Desktop': 'sm',
      'Ultrabook-Tablet': 'ut',
      'Notebook': 'nb',
      'Small Tablet': 'st',
      'iPad': 'pa',
      'iPhone': 'po',
      'Hi Win Phone': 'wh',
      'Lo Win Phone': 'wl',
      'Archoid': 'ar'
    },
    mobreg: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i,     // respond regex for determining mobile devices in navigator.userAgent
    show_mobile: ['st', 'po', 'wh', 'wl', 'ar'],  // set list of media queries for desktop to show the mobile nav bar
    os: 'Unknown OS',      // the os of course
    mobile: false,         // are we on a mobile network or a wi-fi/wired network -
    platform: 'desk:',  // human friendly form of .mobile above
    agent: '',            // the user agent short name
    browser: '',          // the user browser short name
    orient: '',           // 'po' '•P' or 'la' '•L'
    mql: '',              // the media query object
    dmq: '',              // the media query short code
    query: '',             // the media query object
    dynamic: false,        // dynamic - state - to throttle responding to media query state changes during init
    // doc.ready sets to true so it is only processed once and then delivered to the DOM
    state: ''           // the media query state
  };

  // get os
  if (navigator.appVersion.indexOf("Win")!=-1) mq.os="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) mq.os="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) mq.os="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) mq.os="Linux";

  // set platform state mobile true - desktop false
  if( mq.mobreg.test(navigator.userAgent) ) {mq.mobile = true;}

  // set platform
  mq.platform = (mq.mobile)? 'mobile:' : 'desk:';

  // get userAgent
  if (navigator.userAgent.indexOf('Android') > -1) {
    mq.agent = 'Android'
  } else if (navigator.userAgent.indexOf('webOS') > -1) {
    mq.agent = 'webOS'
  } else if (navigator.userAgent.indexOf('iPhone') > -1) {
    mq.agent = 'iPhone'
  } else if (navigator.userAgent.indexOf('iPad') > -1) {
    mq.agent = 'iPad'
  } else if (navigator.userAgent.indexOf('BlackBerry') > -1) {
    mq.agent = 'BlackBerry'
  } else if (navigator.userAgent.indexOf('IEMobile') > -1) {
    mq.agent = 'IEMobile'
  } else if (navigator.userAgent.indexOf('Opera Mini') > -1) {
    mq.agent = 'Opera Mini'
  } else if (navigator.userAgent.indexOf('Macintosh') > -1) {
    mq.agent = 'Mac'
  }

  // get browser
  if (navigator.userAgent.indexOf('Trident') > -1) {
    mq.browser = 'Explorer'
  } else if (navigator.userAgent.indexOf('Chrome') > -1) {
    mq.browser = 'Chrome'
  } else if (navigator.userAgent.indexOf('Safari') > -1) {
    mq.browser = 'Safari'
  } else if (navigator.userAgent.indexOf('Firefox') > -1) {
    mq.browser = 'Firefox'
  }

  // get initial orientation
  mq.mql = window.matchMedia("(orientation: po)");
  handleOrientationChange(mq.mql);

  function crupdate(def) {

    _.map(def, function (obj, key){

      if (_.isObject(obj)) {
        _.map(obj, function (val, key2){

          if (!!app.dmq[key]) {

            if(debug.ver){consolever('--> app.res - app.dmq.%s', key)}

            if (!!app.dmq[key][key2]) {

              if (app.dmq[key][key2] !== val) {
                if(debug.ver){console.log('--> app.res - setting new  val app.dmq.%s.%s = %o', key, key2, val)}
              } else {
                if(debug.ver){console.log('--> app.res - setting same val app.dmq.%s.%s = %o', key, key2, val)}
              }

//              app.dmq[key] = obj;
              app.dmq[key][key2] = val;

            } else {

              if(debug.ver){console.log('--> app.res - adding app.dmq.%s.%s = %o', key, key2, val)}
//              app.dmq[key] = obj;
              app.dmq[key][key2] = val;

            }

          } else {

            if(debug.ver){console.log('--> app.res - adding app.dmq.%s ', key)}

            app.dmq[key] = obj;
//            app.dmq[key][key2] = val;

          }

        });

      } else {

        if (!!app.dmq[key]) {
          if (app.dmq[key] !== obj) {
            if(debug.ver){console.log('--> app.res - set new  app.dmq.%s = %o', key, obj)}
          } else {
            if(debug.ver){console.log('--> app.res - set same app.dmq.%s.%s = %o', key, obj)}
          }
        } else {
          if(debug.ver){console.log('--> app.res - add app.dmq.%s = %o', key, obj)}
          app.dmq[key] = obj;
        }

      }
    });


  }

  // DYNAMIC FUNCTIONS - EXTERNAL

  app.res = function (doc) {

    if(debug.ver){console.log('--> dyn.res doc.info  %o ', doc.info)}
    if(debug.ver){console.log('--> dyn.res doc.ejs  %o ', doc.ejs)}
    if(debug.ver){console.log('--> dyn.res doc.def  %o ', doc.def)}
    if(debug.ver){console.log('--> dyn.res doc.data  %o ', doc.data)}

    if(debug.ver){console.log('--> dyn.res %o ', doc.info.title)}

    if (doc.info.version === version) {
      if(debug.ver){console.log('--> dyn.res %o version in sync! %o', doc.info.title, doc.info.version)}
    } else {
      if(debug.ver){console.log('--> dyn.res %o version NOT in sync! %o ', doc.info.title, doc.info.version)}
    }

    if (doc.info.def === 'custom') {
      crupdate(doc.def);
      if(debug.log){console.log('--> dyn.res.custom  - %o - doc.def: %o - app.dmq: %o  - doc.info.state: %o', doc.info.title, doc.def, app.dmq, doc.info.state )}
    } else {
      if (doc.info.state) {
        crupdate(doc.def);
        if(debug.log){console.log('--> app.res.default - %o - doc.def: %o - app.dmq: %o - doc.info.state: %o', doc.info.title, doc.def, app.dmq, doc.info.state)}
      } else {
        if(debug.log){console.log('--> dyn.res.default - %o - app.dmq: %o - doc.info.state: %o', doc.info.title, app.dmq, doc.info.state)}
      }
    }

    var view = getView('app.res');

    _.map(view, function (val, key){
      doc.data[key] = val;
      if(debug.ver){console.log('set - doc.data.%o = %o ', key, val)}
    });

    if(debug.ver){console.log('doc  %o', doc)}

    // set the assets path

    doc.data.partials = doc.info.partials;
    doc.data.path = doc.info.root;
    doc.data.assets = doc.data.base + '/';
    doc.data.img = doc.data.base;
    doc.data.view = mq.query;

    if(debug.ver){console.log('doc.data 2  %o', doc.data)}

    var state = false;

    switch (doc.info.condition) {
      case 'mobile':
        state = mq.mobile;
        break;
      case 'mobile-show':
        state = useMobile();
        break;
      case 'show':
        state = queryMatch(mq.show_mobile);
        break;
      default:
        console.log('missing switch for doc.info.condition: ' + doc.info.condition);
    }

    var html = '';

    switch (doc.info.type) {
      case 'static':
        html = new EJS({url: doc.info.partials + doc.ejs[doc.data.base]}).render(doc.data);
        break;
      case 'dynamic':
        // mobile/desk
        if (state) {
          doc.data.css = doc.data.dyn + '-' + mq.orient;
        } else {
          doc.data.css = doc.data.dyn;
        }
        html = new EJS({url: doc.info.partials + doc.ejs[doc.data.base]}).render(doc.data);
        break;
      default:
        console.log('missing switch - doc.info.type ' + doc.info.type);
    }

    $(doc.info.target).html(html);

    return app;
  };

  app.init = function () {

    if(debug.ver){console.log('--> dyn.init')}

    mq.mql = window.matchMedia("(orientation: po)");
    mq.mql.addListener(handleOrientationChange);
    handleOrientationChange(mq.mql);
    handleQueryChange('app.init');
    $('#debug-menu').text(genShortCode());

    return app;
  };

  app.dyn_on = function () {
    if(debug.ver){console.log('--> dyn.dyn_on')}
    mq.dynamic = true;

    return app;
  };

  app.dyn_off = function () {
    if(debug.ver){console.log('--> dynamic app: dyn.dyn_off()')}
    mq.dynamic = false;

    return app;
  };


  // DYNAMIC FUNCTIONS - INTERNAL

  // constructors

  //  field.value
  function Field(val){
    var value = val;

    this.__defineGetter__("value", function(){
      return value;
    });

    this.__defineSetter__("value", function(val){
      value = val;
    });
  }

  // field.state
  function State(val){
    var value = val;

    this.__defineGetter__("state", function(){
      return value;
    });

    this.__defineSetter__("state", function(val){
      value = val;
    });
  }

  // app.plugins = new Plugin('timeline', 'news', news)
  function Plugin(key, val){
    var value = val;

    this.__defineGetter__(key, function(){
      return value;
    });

    this.__defineSetter__(key, function(val){
      value = val;
    });
  }

  // get the View
  function getView(caller) {
    if(debug.ver){console.log('--> getView: caller  %o', caller)}

    var code = mq.query + mq.orient;
    if(debug.ver){console.log('set mq.dmq code:  %o', code)}

//    var view = def[mq.query][mq.orient];
    var view = app.dmq[code];
    if(debug.ver){console.log('view:  %o', view)}

    return view
  }


  // conditionals
  function queryMatch(list) {
    return list.indexOf(mq.query) > -1
  }

  function useMobile() {
    return mq.mobile || queryMatch(mq.show_mobile);
  }

  // generate short code for platform, query and orientation for display in brand code of navbar
  function genShortCode() {

    var plat = (mq.mobile)? 'mo' : 'hi';

    var code = mq.query + mq.orient;
    if(debug.ver)  {console.log('--> genShortCode setting -> mq.dmq: to code %o' , code)}
    mq.dmq = code;
    if(debug.ver)  {console.log('--> genShortCode getting -> mq.dmq: %o' , mq.dmq)}

    var msg = plat + '•' + mq.query + '•' + mq.orient;
    if(debug.ver)  {console.log('--> genShortCode returning -> plat•dev•ori: ' + msg)}
    return msg;
  }

  // handle orientation changes
  function handleOrientationChange(mql) {
    if (mql.matches) {
      /* The device is currently in portrait orientation - po */
      $('#info-debug-platform').text(mq.platform + ' ' + mq.agent + ' ' + mq.os + ' ' + mq.browser);
      mq.orient = 'po';
      $('#info-debug-orientation').text(mq.orient);
      $('#info-debug-user-agent').text(navigator.userAgent);
    } else {
      /* The device is currently in landscape orientation - la */
      $('#info-debug-platform').text(mq.platform + ' ' + mq.agent + ' ' + mq.os + ' ' + mq.browser);
      mq.orient = 'la';
      $('#info-debug-orientation').text(mq.orient);
      $('#info-debug-user-agent').text(navigator.userAgent);
    }
  }

  // handle query init for enquire watchers
  function handleQueryInit(media) {
    if(debug.ver){console.log('Media Init Log: ' + media)}
  }

  // handle media change
  function handleMediaChange(media, match) {
    if(debug.ver){console.log('Media Change Log - media: %o match %o ', media, match)}

    if (mq.dynamic) {

      var $media = $('#info-debug-media');
      $('#info-debug-media-previous').text($media.text());
      $media.text(media);

      handleQueryChange('handleMediaChange', match);

    }

  }

  // *** Dynamic Template System - stack-em, stack-px, minw-em, minw-px, boot-em, boot-px
  // em set
  function handleQueryChange(caller, match) {

    if(debug.ver){console.log('handleQueryChange - caller: ' + caller + ' mq.dynamic: ' + mq.dynamic)}

    //  test for desktop - larger than notebook

    mq.mql = window.matchMedia("screen and (min-width: 105em)");

    if (mq.mql.matches) {
      mq.query = 'lg';
      if(debug.ver){console.log('after min 105: ' + mq.query)}
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 85em) and (max-height: 48em)");
      if (mq.mql.matches) {
        mq.query = 'ut';
        if(debug.ver){console.log('after min 80 max 48: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 80em) and (max-height: 50em)");
      if (mq.mql.matches) {
        mq.query = 'nb';
        if(debug.ver){console.log('after min 80 max 50: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 80em) and (max-height: 64em)");
      if (mq.mql.matches) {
        mq.query = 'sm';
        if(debug.ver){console.log('after min 80 max 64: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 64em)");
      if (mq.mql.matches) {
        mq.query = 'pa';
        if(debug.ver){console.log('after min 64 max 48: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 48em) and (max-width: 80em)");
      if (mq.mql.matches) {
        mq.query = 'wh';
        if(debug.ver){console.log('after min 48 max 80: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 40em) and (max-height: 60em)");
      if (mq.mql.matches) {
        mq.query = 'po';
        if(debug.ver){console.log('after min 40 max 60: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 37.5em)");
      if (mq.mql.matches) {
        mq.query = 'st';
        if(debug.ver){console.log('after min 38: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 30em) and (max-height: 50em)");
      if (mq.mql.matches) {
        mq.query = 'wl';
        if(debug.ver){console.log('after min 30 max 50: ' + mq.query)}
      }
    }

    if (mq.query === '') {
      mq.mql = window.matchMedia("screen and (min-width: 20em)");
      if (mq.mql.matches) {
        mq.query = 'ar';
        if(debug.ver){console.log('after min 20: ' + mq.query)}
      }
    }

    $('#info-debug-device').text(mq.query);

    // show vars
    if (debug.ver) {
      console.log('version  %o', version);
      console.log('debug  %o', debug);
      console.log('mq  %o', mq);
      console.log('debug  %o', debug);

    }

    respondContent('handleMediaChange', match);

  }


  // throttle query change trigger to only valid events
  function respondContent(caller, match) {
    if (mq.dynamic) {

      if(debug.ver){console.log('--> respondContent - caller: %o - match: %o', caller, match)}
      if(debug.ver){console.log('--> respondContent - mq.dmq: %o', mq.dmq)}

      if (app.reload_page.state && match) {

        app.ratio.update('respondContent', match);

      } else {

        app.ratio.update('respondContent', match);

      }

      $('#debug-menu').text(genShortCode());

      location.reload();
    }
  }


  if(debug.ver){console.log('dynamic load - 1a pre handleQueryChange - mq: %o', mq)}

  handleQueryChange('Dynamic');

  if(debug.ver){console.log('dynamic load - 1b post handleQueryChange - mq.query: %o', mq.query)}



  // media query watch code with enquire.js

  // em set

  // Large Desktop
  enquire.register("screen and (min-width: 105em)", {
    match : function() {handleMediaChange('m•min-w 105', true)},
    unmatch : function() {handleMediaChange('u•min-w 105', false)},
    setup : function() {handleQueryInit('i•min-w 105')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 105')}
  });

  // Ultrabook
  enquire.register("screen and (min-width: 85em) and (max-height: 48em)", {
    match : function() {handleMediaChange('m•min-w 85 max-h 48', true)},
    unmatch : function() {handleMediaChange('u•min-w 85 max-h 48', false)},
    setup : function() {handleQueryInit('i•min-w 85 max-h 48')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 85 max-h 48')}
  });

  // Notebook
  enquire.register("screen and (min-width: 80em) and (max-height: 50em)", {
    match : function() {handleMediaChange('m•min-w 80 max-h 50', true)},
    unmatch : function() {handleMediaChange('u•min-w 80 max-h 50', false)},
    setup : function() {handleQueryInit('i•min-w 80 max-h 50')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 80 max-h 50')}
  });

  // Small Desktop
  enquire.register("screen and (min-width: 80em) and (max-height: 64em)", {
    match : function() {handleMediaChange('m•min-w 80 max-h 64', true)},
    unmatch : function() {handleMediaChange('u•min-w 80 max-h 64', false)},
    setup : function() {handleQueryInit('i•min-w 80 max-h 64')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 80 max-h 64')}
  });

  // Tablet ToDo
  /*enquire.register("screen and (min-width: 64em)", {
   match : function() {handleMediaChange('m•min-w 64 max-h 48')},
   unmatch : function() {handleMediaChange('u•min-w 64 max-h 48')},
   setup : function() {handleQueryInit('i•min-w 64 max-h 48')},
   deferSetup : true,
   destroy : function() {handleMediaChange('x•min-w 64 max-h 48')}
   });*/

  // iPad
  enquire.register("screen and (min-width: 64em)", {
    match : function() {handleMediaChange('m•min-w 64 max-h 48', true)},
    unmatch : function() {handleMediaChange('u•min-w 64 max-h 48', false)},
    setup : function() {handleQueryInit('i•min-w 64 max-h 48')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 64 max-h 48')}
  });

  // Hi Win Phone
  enquire.register("screen and (min-width: 48em) and (max-height: 80em)", {
    match : function() {handleMediaChange('m•min-w 48 max-h 80', true)},
    unmatch : function() {handleMediaChange('u•min-w 48 max-h 80', false)},
    setup : function() {handleQueryInit('i•min-w 48 max-h 80')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 48 max-h 80')}
  });

  // iPhone
  enquire.register("screen and (min-width: 40em) and (max-height: 60em)", {
    match : function() {handleMediaChange('m•min-w 40 max-h 60', true)},
    unmatch : function() {handleMediaChange('u•min-w 40 max-h 60', false)},
    setup : function() {handleQueryInit('i•min-w 40 max-h 60')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 40 max-h 60')}
  });

  // Small Tablet
  enquire.register("screen and (min-width: 37.5em)", {
    match : function() {handleMediaChange('m•min-w 37.5em', true)},
    unmatch : function() {handleMediaChange('u•min-w 37.5em', false)},
    setup : function() {handleQueryInit('i•min-w 37.5em')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 37.5em')}
  });

  // Lo Win Phone
  enquire.register("screen and (min-width: 30em) and (max-height: 50em)", {
    match : function() {handleMediaChange('m•min-w 30 max-h 50', true)},
    unmatch : function() {handleMediaChange('u•min-w 30 max-h 50', false)},
    setup : function() {handleQueryInit('i•min-w 30 max-h 50')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 30 max-h 50')}
  });

  // Archoid // too strict - 'm•min-w 20 max-h 30'
  enquire.register("screen and (min-width: 20em)", {
    match : function() {handleMediaChange('m•min-w 20', true)},
    unmatch : function() {handleMediaChange('u•min-w 20', false)},
    setup : function() {handleQueryInit('i•min-w 20')},
    deferSetup : true,
    destroy : function() {handleMediaChange('x•min-w 20')}
  });

  if(debug.ver){console.log('dynamic load - 2 - enquire\'d')}

  if ( typeof define === "function" && define.amd ) {
    define( "Dynamic", [], function () { return app; } );
  }

})(Dynamic, window);