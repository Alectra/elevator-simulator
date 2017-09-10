(function () {
	'use strict';

	angular.module('app').component('floors', {
		controllerAs: 'vm',
        controller: function (appService) {
			var vm = this;

			// vm.simData = '';
			// vm.simulation = {
			// 	numFloors: '',
			// 	numElevators: '',
			// 	floorSpeed: ''
			// };
			// vm.submit = function () {
			// 	// vm.simData = vm.simulation.first + ' ' + vm.simulation.last;
			// 	vm.simData = appService.submitSimulation(vm.simulation.numFloors, vm.simulation.numElevators, vm.simulation.floorSpeed);
			// };

			// vm.things = null;
			// vm.$onInit = function () {
			// 	vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/floors/floors.component.html'
	});
})();