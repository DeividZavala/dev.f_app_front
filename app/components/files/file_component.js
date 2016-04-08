(function (){
	'use strict'

	var file = {
		template : `
		<div class="container">
            <ul class="collapsible" data-collapsible="accordion">
            	<li>
			      <div class="collapsible-header"><i class="material-icons">perm_media</i>First <span>Skills</span> </div>
			      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
			    </li>
			    <li>
			      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
			      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
			    </li>
            </ul>
          </div>
          `
	}

	angular
		.module('devfapp')
		.component('file',file)

})();