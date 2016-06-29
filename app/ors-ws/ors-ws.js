(function() {
	'use strict';

	var app = angular.module('ors-ws', []);

	app.controller('ors-ws.Ctrl', ['$scope', '$injector', function($scope, $injector) {
		console.log('controller');
		
		var $http = $injector.get('$http');
		var $q = $injector.get('$q');
		
		$q.when('').then(function(response) {
			console.log('appel marcel 2s', response);
			return $http.get('/ws/marcel');
		}).then(function(response) {
			console.log('appel simultané de herve, philippe et fabien ', response);
			return $q.all([
				$http.get('/ws/herve'),
				$http.get('/ws/philippe'),
				$http.get('/ws/fabien')
			]);
		}).then(function(response) {
			console.log('all terminée', response);
			if (true) {
				console.log('2eme appel de marcel début', response);
				return $http.get('/ws/marcel');
			}
			return true;
		}).then(function(response) {
			console.log('2eme appel de marcel fini', response);
			return true;
		}).catch(function(error) {
			console.error('error', error);
		});
		
	}]);

})();
