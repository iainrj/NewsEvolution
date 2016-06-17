'use strict';

const http = require('http'),
      _    = require('lodash');

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

let timestamps = "",
  url  = 'http://web.archive.org/cdx/search/cdx?url=bbc.com/news&fl=timestamp&filter=statuscode:200&from=20160612070000&output=json';

http.get(url, (res) => {
  res.on('data', (d) => {
    timestamps += d;
  });
  res.on('end', () => {
    let archiveUrls = createSiteRequestUrl(timestamps);
    console.log(archiveUrls);
  });
}).on('error', (e) => {
  console.error(e);
});
