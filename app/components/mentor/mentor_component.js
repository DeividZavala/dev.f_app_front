(function (){
	'use strict'

	var mentor = {
		template : `
			<div class = "container">
				<div class="row">
			        <div class="col s12 m6 l4">
			          <div class="card">
			            <div class="card-image">
			              <img src="https://pbs.twimg.com/media/CSFDr88WEAEN-KR.jpg">
			              <span class="card-title">Kike Díaz</span>
			            </div>
			            <div class="card-content">
			              <p>Google developer expert en Android</p>
			            </div>
			            <div class="card-action">
			              <a href="#">Ve a su perfil</a>
			            </div>
			          </div>
			        </div>
			    </div>
			</div>

			`
	}

	angular
		.module('devfapp')
		.component('mentor',mentor)
})();