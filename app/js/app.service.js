(function () {
	'use strict';

	angular.module('app').service('appService', function ($timeout, $interval) {
		var self = this;
		var name = 'tmp';
		var things = [
			{
				name:'thing 1'
			},
			{
				name:'thing 2'
			},
			{
				name:'thing 3'
			},
			{
				name:'thing 4'
			},
			{
				name:'thing 5'
			}
		];
		self.getAllThings = function () {

			return things;
		};

		self.submitSimulation = function (numFloors, numElevators, floorSpeed) {
			name = 'floors:'+numFloors + ' elevators:' + numElevators + ' speed:' + floorSpeed;
			// things[0].name = name;
			// console.log(name);
			return name;
		};
		self.getName = function () {
			return name;
		};

		self.stopOtherTimer = function () {
			timer = 50;
			return timer;
		};

		var countdown = 0;
		self.startCountdown = function (val) {
			countdown = val;
			$timeout(function () { countdown--; }, 1000);
			return countdown;
		};


	});
})();