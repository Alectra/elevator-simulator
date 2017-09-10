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
				needsService: true,
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
		self.callElevator = function (floorNum) {
			//CALL ELEVATOR FUNCTIONALITY
			/*	Psudocode
			var elevatorFound = false
			// if a moving elevator will pass this floor, use it
			for each (elevator in elevators) {
				if (elevator.moving
						&& elevator.startFloor > floorNum
						&& elevator.destinationFloor < floorNum) {
					send this elevator to the calling floor
					stop looping thru elevators
					elevatorFound = true
				}
			}

			// if no mopving elevator will pass this floor, find the closest stopped one
			if (!elevatorFound) {
				// find closeset elevator that is stopped
			}

			// add an elevator stop at floorfloorNum

			// start the timer function at simData.floorSpeedSec

			// add the callback for the timer to send the elevator back info when it reaches the correct floor

			*/
		};

		self.resetSimulation();

		// var countdown = 0;
		// self.startCountdown = function (val) {
		// 	countdown = val;
		// 	$timeout(function () { countdown--; }, 1000);
		// 	return countdown;
		// };


	});
})();