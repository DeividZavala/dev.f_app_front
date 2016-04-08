(function(){
	'use strict'

	angular
		.module('devfapp')
		.controller('homeCtrl',homeCtrl);


	homeCtrl.$inject = ['loginService']

	function homeCtrl(loginService){
		var home = this;
		home.login = login;

		function login(){
			loginService.doLogin(home.data);
		}
		// this.userlog = loginService;
		// this.login = login;

		// function login(){
		// 	console.log('c');
		// }
	};


})();