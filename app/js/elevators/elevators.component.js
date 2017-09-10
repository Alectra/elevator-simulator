(function () {
	'use strict';

	angular.module('app').component('elevators', {
		controllerAs: 'vm',
        controller: function (appService) {
			var vm = this;

			vm.elevators = null;

			vm.$onInit = function () {
				vm.elevators = appService.getElevators();
			};
			vm.serviceElevator = function (elevatorId) {
				// vm.simData = appService.resetSimulation();
				vm.elevators[elevatorId].needsService = false;
			};
        },
		templateUrl: 'js/elevators/elevators.component.html'
	});
})();