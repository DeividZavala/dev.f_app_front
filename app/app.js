(function(){
	'use strict'

	angular
		.module('devfapp',['ngRoute','ngResource']);


	$(document).ready(function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
		$('.collapsible').collapsible();
	});

})();