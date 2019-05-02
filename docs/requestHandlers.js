const request = require('request')
const cheerio = require("cheerio");
const fs = require("fs");

var exec = require("child_process").exec;


const url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm'//氣象局網站

//爬網頁
function start(res) {

    request(url, (err, resp, body) => {

        if (err || !body) {
            return;
        }
        const $ = cheerio.load(body);
        const tr = $('.FcstBoxTable01 tr');
        var result = [];

        for (var i = 0; i < tr.length; i++) {
            var t = {};
            tr.eq(i).children().each(function (index) {
                t['key' + index] = $(this).text()
            });
            result.push(t);
        }
        
        // console.log(result);

        fs.writeFileSync("result.json", JSON.stringify(result));
        // res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
        // res.send(JSON.stringify(result))
        res.end(JSON.stringify(result))
    });

}
exports.start = start;



//阻塞
// function sleep(milliSeconds){
//     var startTime = new Date().getTime();
//     while (new Date().getTime() <startTime + milliSeconds);
// }
//  sleep(10000);
//  return "HELLO START";