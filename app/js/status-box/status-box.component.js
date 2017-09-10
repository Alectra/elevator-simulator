(function () {
	'use strict';

	angular.module('app').component('statusBox', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			vm.data = null;

			vm.$onInit = function () {
				vm.data = appService.getSimData();
			};
			vm.reset = function () {
				vm.simData = appService.resetSimulation();
			};
        },
		templateUrl: 'js/status-box/status-box.component.html'
	});
})();