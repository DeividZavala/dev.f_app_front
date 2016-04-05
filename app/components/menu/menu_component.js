(function(){
	'use strict'

	var menu = {
		template: `
		 <nav>
		    <div class="nav-wrapper">
		      <a href="#!" class="brand-logo"><img src="http://devf.mx/assets/devf-logo.png"></a>
		      <a href="" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		      <ul class="right hide-on-med-and-down">
		      <li><a href="#/jobs">Jobs</a></li>
		        <li><a href="#/senseis">Senseis</a></li>
		        <li><a href="#/mentores">Mentores</a></li>
		        <li><a href="#/calendar">Calendario</a></li>
		      </ul>
		      <ul class="side-nav" id="mobile-demo">
		        <li><a href="sass.html">Sass</a></li>
		        <li><a href="badges.html">Components</a></li>
		        <li><a href="collapsible.html">Javascript</a></li>
		        <li><a href="mobile.html">Mobile</a></li>
		      </ul>
		    </div>
		  </nav>
		  `
	};

	angular
		.module('devfapp')
		.component('menu',menu)

})();