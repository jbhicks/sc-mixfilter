var express = require('express');
var app = express();
const axios = require('axios');

app.get('/', function(req, res) {
  let data = getData().then(data => {
    res.send(data);
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});

async function getData() {
  let response = await axios.get('https://api-v2.soundcloud.com/me/play-history/tracks?client_id=US4P8VHRqazZTuv4RddkNN7cqCqUQkQy&limit=25&offset=0&linked_partitioning=1&app_version=1632480421&app_locale=en', {
  headers: {
    "Host": "api-v2.soundcloud.com",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Authorization": "OAuth 2-292952-141564746-Bl0EIetoLyfPw9",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
    "Sec-GPC": "1",
    "Origin": "https://soundcloud.com",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://soundcloud.com/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9"
}});
  return response.data;}