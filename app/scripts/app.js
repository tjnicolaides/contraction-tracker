'use strict';
var contractionsApp = angular.module('contractionsApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'angularMoment']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).when('/list', {
		templateUrl: 'views/list.html',
		controller: 'ListCtrl'
	}).when('/list/:time', {
		templateUrl: 'views/list.html',
		controller: 'ListCtrl'
	}).otherwise({
		redirectTo: '/'
	});
});