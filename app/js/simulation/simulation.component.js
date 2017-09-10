(function () {
	'use strict';

	angular.module('app').component('simulation', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			// vm.things = null;

			// vm.$onInit = function () {
			// 	vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/simulation/simulation.component.html'
	});
})();