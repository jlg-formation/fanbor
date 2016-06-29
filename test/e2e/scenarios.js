(function() {
	'use strict';

	describe('Exo Test', function() {

		describe('Main page', function() {

			beforeEach(function() {
				browser.get('app/');
			});

			it('should give marcel', function() {
				var productLink = element.all(by.css('ors-header a')).get(1);
				browser.sleep(3000);
				productLink.click();
				var marcel = element(by.css('#marcel'));
				expect(marcel.getText()).toEqual('Marcel');
			});
		});
	});
})();
