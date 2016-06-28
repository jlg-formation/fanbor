(function() {
	'use strict';

	var clone = function(o) {
		var result = {};
		for (var p in o) {
			if (o[p] !== null && typeof o[p] === 'object') {
				result[p] = clone(o[p]);
			} else {
				result[p] = o[p];
			}
		}
		return result;
	};

	var a = {
		a: 2,
		b: { x: 3 }
	};
	var b = clone(a);
	console.log('a.b.x', a.b.x);
	console.log('b.b.x', b.b.x);
	b.b.x = 5;
	console.log('a.b.x', a.b.x);
	console.log('b.b.x', b.b.x);

})();
