(function () {
	'use strict';

	angular.module('app').component('setupBox', {
		controllerAs: 'vm',
        controller: function (appService) {
			var vm = this;

			vm.simData = '';
			vm.simulation = null;
			vm.submit = function () {
				// vm.simData = vm.simulation.first + ' ' + vm.simulation.last;
				vm.simData = appService.submitSimulation(vm.simulation.numFloors, vm.simulation.numElevators, vm.simulation.floorSpeed);
			};

			// vm.data = null;
			vm.$onInit = function () {
				vm.simulation = appService.getSimData();
			};
        },
		templateUrl: 'js/setup-box/setup-box.component.html'
	});
})();