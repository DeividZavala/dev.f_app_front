(function(){
	'use strict'

	var calendar = {
		controller: calendarController,
		template : `
				<div class = "container">
					<div class ="row">
						<div class="card col s12 m5 l4">
						    <div class="events-img card-image waves-effect waves-block waves-light">
						      <img class="activator" src="http://walkerflieller.com/img/angular-js.png">
						    </div>
						    <div class="card-content">
						      <span class="card-title activator grey-text text-darken-4">Desgraduación<i class="material-icons right">more_vert</i></span>
						    </div>
						    <div class="card-reveal">
						      <span class="card-title grey-text text-darken-4">Desgraduación<i class="material-icons right">close</i></span>
						      <p>
						      	Lugar: Google México <br>
						      	Hora: 12 pm
						      </p>
						    </div>
						</div>
					</div>
				</div>

		`

	}



	function calendarController(){
		var calendar = this
	}

	angular
		.module('devfapp')
		.component('calendar',calendar)
})();