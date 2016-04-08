(function(){
	'use strict'

	var menu = {
		template: `
		 <nav>
		    <div class="nav-wrapper">
		      <a href="#!" class="brand-logo"><img src="http://devf.mx/assets/devf-logo.png"></a>
		      <a href="" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		      <ul class="right hide-on-med-and-down">
		        <li><a href="#/senseis">Senseis</a></li>
		        <li><a href="#/mentores">Mentores</a></li>
		        <li><a href="#/calendar">Calendario</a></li>
		        <li><a href="#/files">Documentos</a></li>
		      </ul>
		      <ul class="side-nav" id="mobile-demo">
		        <li><a href="#/senseis">Senseis</a></li>
		        <li><a href="#/mentores">Mentores</a></li>
		        <li><a href="#/calendar">Calendario</a></li>
		        <li><a href="#/files">Documentos</a></li>
		      </ul>
		    </div>
		  </nav>
		  `
	};

	angular
		.module('devfapp')
		.component('menu',menu)

})();