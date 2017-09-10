(function () {
	'use strict';

	angular.module('app').component('floors', {
		controllerAs: 'vm',
        controller: function (appService) {
			var vm = this;
			vm.floors = null;

			vm.$onInit = function () {
				vm.floors = appService.getFloors();
			};
			vm.callElevator = function (floorId) {
				// appService.callElevator();
				vm.floors[floorId].isWaiting = true;
			};
        },
		templateUrl: 'js/floors/floors.component.html'
	});
})();