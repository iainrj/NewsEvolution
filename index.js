'use strict';

const http = require('http'),
      urlBuilder = require('./lib/urlBuilder');

let timestamps = "",
  url  = 'http://web.archive.org/cdx/search/cdx?url=bbc.com/news&fl=timestamp&filter=statuscode:200&from=20160612070000&output=json';

http.get(url, (res) => {
  res.on('data', (d) => {
    timestamps += d;
  });
  res.on('end', () => {
    let archiveUrls = urlBuilder.createSiteRequestUrls(timestamps);
    console.log(archiveUrls);
  });
}).on('error', (e) => {
  console.error(e);
});
