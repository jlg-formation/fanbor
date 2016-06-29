(function() {
	'use strict';

	describe('ors-ws', function() {
		beforeEach(module('ors-ws'));

		describe('ors-ws.Ctrl', function() {
			var $scope = undefined;
			var $controller = undefined;
			var $http = undefined;
			var $controller = undefined;
			var $rootScope = undefined;
			var ctrl = undefined;


			beforeEach(inject(function($injector) {
				$http = $injector.get('$httpBackend');
				$rootScope = $injector.get('$rootScope');
				$controller = $injector.get('$controller');
				
				
			}));

			afterEach(function() {
				$http.verifyNoOutstandingExpectation();
				$http.verifyNoOutstandingRequest();
			});



			it('should be created normally', function() {
				$http.when('GET', '/ws/marcel').respond({
					prenom: 'Marcelle'
				});
				$http.when('GET', '/ws/fabien').respond({
					prenom: 'Marcelle'
				});
				$http.when('GET', '/ws/philippe').respond({
					prenom: 'Marcelle'
				});
				$http.when('GET', '/ws/herve').respond({
					prenom: 'Marcelle'
				});
				$http.expectGET('/ws/marcel');
				
				$http.expectGET('/ws/herve');
				$http.expectGET('/ws/philippe');
				$http.expectGET('/ws/fabien');
				
				$http.expectGET('/ws/marcel');
				$scope = $rootScope.$new();
				ctrl = $controller('ors-ws.Ctrl', {$scope: $scope });
				$http.flush();
				
				expect($rootScope.marcel).toEqual('Marcelle');
				
			});


		});
	});
})();

