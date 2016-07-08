var Backbone = require("backbone");
var MyAppView = require("./myapp.jsx");
var DefaultView = require("./default.jsx");

// alert(myApp.name);

var Workspace = Backbone.Router.extend({

  routes: {
    'myapp': 'myapp',
    '*path':  'defaultRoute'
  },

  myapp: function() {
    var myappView = new MyAppView.view();
    myappView.init();      
  },

  defaultRoute: function() {
    var defaultView = new DefaultView.view();
    defaultView.init();
  }
  
});

var app = new Workspace;

Backbone.history.start();