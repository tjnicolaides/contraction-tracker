'use strict';
angular.module('contractionsApp').controller('ListCtrl', function($scope, $routeParams, contractionStorage) {
	$scope.contractions = contractionStorage.get();
	
	angular.forEach($scope.contractions, function(value, key){
		var a = moment(value.end_time);
		var b = moment(value.start_time);
		var diff = a.diff(b, 'minutes');
		if(diff === 0) {
			$scope.contractions[key].length = ' > 1 minute';
		} else if (diff === 1) {
			$scope.contractions[key].length = '1 minute';
		} else {
			$scope.contractions[key].length = diff + ' minutes';
		}
	}, false);
	
	$scope.$on('$routeChangeSuccess', function() {
		var period = $scope.period = $routeParams.period || '';
		var now = new Date().getTime();
		switch (period) {
		case 'all':
			$scope.timeFilter = null;
			break;
		case 'last-day':
			var lastDay = now - (24 * 60 * 60 * 1000);
			$scope.timeFilter = function(contraction) {
				return contraction.start_time >= lastDay;
			};
			break;
		default:
			var lastHour = now - (1 * 60 * 60 * 1000);
			$scope.timeFilter = function(contraction) {
				return contraction.start_time >= lastHour;
			};
			break;
		}
	});
});