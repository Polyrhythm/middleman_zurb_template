(function() {
  'use strict';

  describe('test spec', function() {
    it('should have truthy divs', function() {
      expect($('<div id="some-id"></div>')).toBe('#some-id');
    });
  });
})();