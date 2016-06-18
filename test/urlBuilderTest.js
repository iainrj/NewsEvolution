'use strict';

const assert = require('chai').assert;
const sinon = require('sinon')
const urlBuilder = require('../lib/urlBuilder');

sinon.assert.expose(assert, { prefix: '' });

describe('urlBuilder', function () {
  let expectedUrls;

  beforeEach(function() {
    expectedUrls = [
      'http://web.archive.org/web/20160612074649/http://www.bbc.com/news',
      'http://web.archive.org/web/20160612085002/http://www.bbc.com/news'
    ];
  });

  describe('::createSiteRequestUrl', function () {
    it('should return an array of archive urls', function () {
      let mockTimestamps = '[["20160612074649"],["20160612085002"]]',
          actualUrls = urlBuilder.createSiteRequestUrls(mockTimestamps);

      assert.isArray(actualUrls);
      assert.deepEqual(expectedUrls, actualUrls);
    });

    it('should ignore any entried with timestamps as the key', function () {
      let mockTimestamps = '[["timestamp"], ["20160612074649"],["20160612085002"]]',
          actualUrls = urlBuilder.createSiteRequestUrls(mockTimestamps);

      assert.isArray(actualUrls)
      assert.deepEqual(expectedUrls, actualUrls);
    });
  });
});
