(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			restrict: 'CEA',
			link: function() {
				console.log('link', arguments);
			}
		};
	});
	
})();
