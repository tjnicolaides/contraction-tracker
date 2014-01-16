'use strict';
/**
 * Services that persists and retrieves TODOs from localStorage
 */
contractionsApp.factory('contractionStorage', function() {
	var STORAGE_ID = 'contractions-angularjs';
	return {
		get: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},
		put: function(contractions) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(contractions));
		}
	};
});