(function(){
  'use strict'

      angular
        .module('devfapp')
        .config(configuration);


    function configuration($routeProvider){
    $routeProvider
      .when('/',
        { 
          templateUrl : './app/home/ctrl_home.html', 
          controller  : 'homeCtrl', 
          controllerAs: 'home',
        })
      .when('/profile',
        { 
          template : "<menu></menu>", 
        })
      .when('/calendar',
        { 
          template : "<menu></menu><calendar></calendar>", 
        })
      .when('/jobs',
        { 
          template : "<menu></menu><jobs></jobs>", 
        })
      .when('/senseis',
        { 
          template : "<menu></menu>", 
        })
      .when('/mentores',
        { 
          template : "<menu></menu><mentor></mentor>", 
        })
      .otherwise( {
        redirectTo : '/' 
      });
  }
  
})();



var Module = (function(){
  var privateProperty = 'foo';
  function privateMethod(args){
    console.log(privateProperty,args);
  }

  return {
    publicProperty:'Public',

    PublicMethod: function (args){
      console.log(this.publicProperty);
    },

    privilegedMethod: function(args){
      return privateMethod(args);
    }
  }
})();