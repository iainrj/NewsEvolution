'use strict';

const _ = require('lodash');

// Object -> Array
function createSiteRequestUrl(timestamps) {
  let responseTimestamps = JSON.parse(timestamps);

  let webUrls = [];
  _.map(responseTimestamps, (timestamp) => {
    if (timestamp[0] !== 'timestamp') {
      webUrls.push(`http://web.archive.org/web/${timestamp}/http://www.bbc.com/news`);
    }
  });
  return webUrls;
}

exports.createSiteRequestUrl = createSiteRequestUrl;
