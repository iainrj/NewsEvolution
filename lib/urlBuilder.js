'use strict';

const _ = require('lodash');

function makeUrl(timestamp) {
  return `http://web.archive.org/web/${timestamp}/http://www.bbc.com/news`;
}

// Object -> Array
function createSiteRequestUrls(timestamps) {
  let responseTimestamps = _.filter(JSON.parse(timestamps), (o) => {
    return o['0'] !== 'timestamp';
  });

  return _.map(responseTimestamps, makeUrl);
}

exports.createSiteRequestUrls = createSiteRequestUrls;
