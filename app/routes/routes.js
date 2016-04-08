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
          template : "<menu></menu><newevent></newevent><calendar></calendar>", 
          resolve : {
            events : getEvents
          }
        })
      .when('/files',
        { 
          template : "<menu></menu><newfile></newfile><file></file>", 
          resolve : {
            files : getFiles
          }
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

  // getUser_token.$inject = ["loginApi"];
  // function getUser_token(loginApi){
  //   return loginApi.query();
  // }

  getFiles.$inject = ["fileApi"]
  function getFiles(fileApi){
    return fileApi.query();
  }
  
  getEvents.$inject = ["eventApi"]
  function getEvents(eventApi){
    return eventApi.query();
  }
})();