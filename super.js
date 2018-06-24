const superagent = require('superagent');  // 引入SuperAgent
require('superagent-proxy')(superagent);  // 引入SuperAgent-proxy
const cheerio = require('cheerio')

var proxy = 'http://45.76.195.243:2345'; // 设置代理

var header = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive'
};

superagent  // 发起请求
    .get('otc.huobi.pro/#/trade?coin=2&type=0')
    .set('header', header)
    .proxy(proxy)
    .end(onresponse);

// 对返回的response进行处理
function onresponse(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res.body);
        let $ = cheerio.load(res.body,toString())
        console.log($('html').find('title').text())
    }
}
