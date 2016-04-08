(function(){
	'use strict'

	angular
		.module('devfapp')
		.factory('loginApi',loginApi);

	loginApi.$inject = ['$resource'];

	function loginApi($resource){
		return $resource('http://devf-network.herokuapp.com/api/v1/api-token-auth');
	}

})();