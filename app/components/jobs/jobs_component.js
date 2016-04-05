(function (){
	'use strict'

	var jobs = {
		template : `
			<ul class="collection with-header">
		        <li class="collection-header"><h4>Trabajos</h4></li>
		        <li class="collection-item"><div>Hacer una tienda virtual<a href="#/." class="secondary-content modal-trigger"><i class="material-icons">send</i></a></div></li>
		        <li class="collection-item"><div>Landing<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
		        <li class="collection-item"><div>Back-end Senior<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
		        <li class="collection-item"><div>Front-end Senior<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
		    </ul>

		    <div id="modal1" class="modal">
			    <div class="modal-content">
			      <h4>Modal Header</h4>
			      <p>A bunch of text</p>
			    </div>
			    <div class="modal-footer">
			      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
			    </div>
			</div>
		   `
	}

	angular
		.module('devfapp')
		.component('jobs',jobs)
})();