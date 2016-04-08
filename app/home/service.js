(function (){
	'use strict'

	angular
		.module('devfapp')
		.service('loginService',loginService);

	loginService.$inject = ["loginApi"];
	function loginService(loginApi){

		return{
			// 'username' : JSON.parse(localStorage.getItem("username")) || {},
			// 'password' : JSON.parse(localStorage.getItem("password")) || {}, 
			'doLogin'  : doLogin
		};

		function doLogin(data){
			console.log("SERVICE", data);
			loginApi.save({'username':'c'})
		}

		 
	  
	}

})();