(function(){
	'use strict'

	angular
		.module('devfapp')
		.factory('eventApi',eventApi);

	eventApi.$inject = ['$resource'];

	function eventApi($resource){
		return $resource('http://devf-network.herokuapp.com/api/v1/event/')
	}

})();