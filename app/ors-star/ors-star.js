(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			restrict: 'CEA',
			link: function(scope, element, attrs) {
				console.log('link', arguments);
				
				scope.$watch('myNote', function() {
					var note = attrs.note;
					note = (scope[note] === undefined) ? Number(note) : scope[note];
					note = (isNaN(note)) ? 3 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 1) ? 1 : note;
					var html = '';
					for (var i = 0; i < note; i++) {
						html += '<img src="ors-star/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img src="ors-star/img/white_star.png" />';
					}
					element.html(html);
				});
				
				
			}
		};
	});
	
})();
