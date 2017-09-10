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
				name: 1,
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
				name: 1,
				isWaiting: false
			},
			{
				id: 1,
				name: 2,
				isWaiting: false
			}
		];
		self.getSimData = function () {

			return simData;
		};
		self.getFloors = function () {

			return floors;
		};
		self.getElevators = function () {

			return elevators;
		};

		var addElevator = function (tmpId) {
			var tmpName = tmpId + 1;
			return {
				id: tmpId,
				name: tmpName,
				totalTrips: 0,
				destinationFloor: 0,
				floorsPassed: 0,
				currentFloor: 1,
				isMoving: false,
				needsService: false,
				isDoorOpen: false
			};
		};
		var addFloor = function (tmpId) {
			var tmpName = tmpId + 1;
			return {
				id: tmpId,
				name: tmpName,
				isWaiting: false
			};
		};

		self.submitSimulation = function (numFloors, numElevators, floorSpeed) {
			data = 'floors:'+numFloors + ' elevators:' + numElevators + ' speed:' + floorSpeed;
			simData.numFloors = numFloors;
			simData.numElevators = numElevators;
			simData.floorSpeed = floorSpeed;
			simData.floorSpeedSec = floorSpeed / 1000;

			// SET UP ELEVATORS
			elevators = [];
			for (var i = 0; i < simData.numElevators; i++)
				elevators[i] = addElevator(i);

			// SET UP FLOORS
			floors = [];
			for (var i = 0; i < simData.numFloors; i++)
				floors[i] = addFloor(i);

			return simData;
		};
		self.resetSimulation = function () {
			data = 'floors:'+simData.numFloors + ' elevators:' + simData.numElevators + ' speed:' + simData.floorSpeed;
			simData.numFloors = 2;
			simData.numElevators = 1;
			simData.floorSpeed = 1000;
			simData.floorSpeedSec = simData.floorSpeed / 1000;

			// SET UP ELEVATORS
			elevators = [];
			for (var i = 0; i < simData.numElevators; i++)
				elevators[i] = addElevator(i);

			// SET UP FLOORS
			floors = [];
			for (var i = 0; i < simData.numFloors; i++)
				floors[i] = addFloor(i);

			return simData;
		};
		self.getData = function () {
			return data;
		};

		self.resetSimulation();

		// self.stopOtherTimer = function () {
		// 	timer = 50;
		// 	return timer;
		// };

		// var countdown = 0;
		// self.startCountdown = function (val) {
		// 	countdown = val;
		// 	$timeout(function () { countdown--; }, 1000);
		// 	return countdown;
		// };


	});
})();