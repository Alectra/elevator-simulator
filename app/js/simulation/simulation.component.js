(function () {
	'use strict';

	angular.module('app').component('simulation', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			// vm.data = null;

			// vm.$onInit = function () {
			// 	vm.data = appService.getData();
            // }
        },
		templateUrl: 'js/simulation/simulation.component.html'
	});
})();