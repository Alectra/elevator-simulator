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
				// find closeset elevator that is stopped && doesn't need service
			}

			// add an elevator stop at floorfloorNum

			// start the timer function at simData.floorSpeedSec

			// add the callback for the timer to send the elevator back info when it reaches the correct floor

			*/
		};

		// FLOORS
		var addFloor = function (tmpId) {
			var tmpName = tmpId + 1;
			return {
				id: tmpId,
				name: tmpName,
				isWaiting: false
			};
		};
		self.updateFloorData = function (floorId, floorIsWaiting) {
			floors[floorId].isWaiting = floorIsWaiting;
		};

		// ELEVATORS
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
		self.passedFloor = function (elevatorId) {
			elevators[elevatorId].passedFloor++;
		};
		self.tripComplete = function (elevatorId) {
			elevators[elevatorId].totalTrips++;
			if (elevators[elevatorId].totalTrips >= 100)
				elevators[elevatorId].needsService = true;
		};
		self.openDoors = function (elevatorId) {
			elevators[elevatorId].isDoorOpen = true;
		};
		self.closeDoors = function (elevatorId) {
			elevators[elevatorId].isDoorOpen = false;
		};

		// initialize simulation
		self.resetSimulation();

		// basic timer function
			// var countdown = 0;
			// self.startCountdown = function (val) {
			// 	countdown = val;
			// 	$timeout(function () { countdown--; }, 1000);
			// 	return countdown;
			// };


	});
})();