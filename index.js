'use strict';

const http = require('http');

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
