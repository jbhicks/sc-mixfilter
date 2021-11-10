var express = require('express');
var app = express();
const axios = require('axios')
const cors = require('cors');
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}

app.use(cors(corsOptions));
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
  let response = await axios.get('https://api-v2.soundcloud.com/stream?sc_a_id=20cfd6d050175896f575cdef54de242f5e1c6013&device_locale=en&variant_ids=&user_urn=soundcloud%3Ausers%3A141564746&promoted_playlist=true&client_id=vTpXbojHiDQ4ZLsTHDcP6YOjNZ19pICC&limit=10&offset=0&linked_partitioning=1&app_version=1636553343&app_locale=en', {
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