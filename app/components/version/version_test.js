'use strict';

describe('iahmDBApp.version module', function() {
  beforeEach(module('iahmDBApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
