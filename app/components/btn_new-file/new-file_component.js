(function (){
	'use strict'

	var newfile = {
		template : `

			<a class="waves-effect waves-light btn modal-trigger btn-newent" href="#modal1">Agregar archivo</a>

			<div id="modal1" class="modal">
			    <div class="modal-content">
			      <h4>Crea un evento</h4>
			      <p>A bunch of text</p>
			    </div>
			    <div class="modal-footer">
			      <a href="#/calendar" class=" modal-action modal-close waves-effect waves-green btn-flat">Crear</a>
			    </div>
			</div>

			`
	}

	angular
		.module('devfapp')
		.component('newfile',newfile)
})();