(function () {
	'use strict';

	angular.module('app').service('appService', function ($timeout, $interval) {
		var self = this;
		var data = 'tmp';
		var simData =
			{
				numFloors:'2',
				numElevators:'1',
				floorSpeed:'1000',
				floorSpeedSec:'1'
			};
		var elevators = [
			{
				id: 0,
				totalTrips: 0,
				destinationFloor: 0,
				floorsPassed: 0,
				currentFloor: 1,
				isMoving: false,
				needsService: false,
				isDoorOpen:false
			},
			{
				id: 1,
				totalTrips: 0,
				destinationFloor: 0,
				floorsPassed: 0,
				currentFloor: 1,
				isMoving: false,
				needsService: false,
				isDoorOpen:false
			}
		];
		var floors = [
			{
				id: 0,
				isWaiting: false
			},
			{
				id: 1,
				isWaiting: false
			}
		];
		self.getAllSimData = function () {

			return simData;
		};

		self.submitSimulation = function (numFloors, numElevators, floorSpeed) {
			data = 'floors:'+numFloors + ' elevators:' + numElevators + ' speed:' + floorSpeed;
			simData.numFloors = numFloors;
			simData.numElevators = numElevators;
			simData.floorSpeed = floorSpeed;
			simData.floorSpeedSec = floorSpeed/1000;
			// simData[0].data = data;
			// console.log(data);
			return data;
		};
		self.getData = function () {
			return data;
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