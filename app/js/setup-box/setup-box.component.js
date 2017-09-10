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
				if (vm.simulation.numFloors < 2)
					vm.simulation.numFloors = 2;
				if (vm.simulation.numElevators < 1)
					vm.simulation.numElevators = 1;
				if (vm.simulation.floorSpeed < 500)
					vm.simulation.floorSpeed = 500;
				// if (vm.simulation.numFloors > 1 && vm.simulation.numElevators > 0 && vm.simulation.floorSpeed > 500)
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