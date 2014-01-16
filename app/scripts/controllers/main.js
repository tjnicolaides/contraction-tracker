'use strict';
angular.module('contractionsApp').controller('MainCtrl', function($scope, $routeParams, contractionStorage) {
	var contractions = $scope.contractions = contractionStorage.get();
	var contraction = $scope.contraction = { severity: 1};
	$scope.$watch('contractions', function(newValue, oldValue) {
		if (newValue !== oldValue) {
			contractionStorage.put(contractions);
		}
	}, true);
	$scope.addContraction = function(contraction) {
		if (!contraction.hasOwnProperty('start_time') || !contraction.hasOwnProperty('end_time')) {
			return false;
		}
		contractions.push(contraction);
		contraction = $scope.contraction = { severity: 1 };
	};
	$scope.timeContraction = function(contraction) {
		if (!contraction.hasOwnProperty('start_time')) {
			contraction.start_time = new Date().getTime();
		} else {
			contraction.end_time = new Date().getTime();
		}
	};
});