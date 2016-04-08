(function(){
	'use strict'

	angular
		.module('devfapp')
		.factory('fileApi',fileApi);

	fileApi.$inject = ['$resource'];

	function fileApi($resource){
		return $resource('http://devf-network.herokuapp.com/api/v1/file/')
	}

})();