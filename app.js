const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

var proxy = 'https://45.76.195.243:2345'
var url = 'https://otc.huobi.pro/#/trade?coin=2&type=0';
var url1 = 'https://www.baidu.com'
var option = {
    url: url1,
    proxy: proxy,
    timeout: 5000,
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
    }
};


//定时器 写入
/*
**/
function getPrice(){
  request(option,function(err,res) {
    if(err){return console.log(err)}
    let $ = cheerio.load(res.body,toString())
    console.log($('html').find('title').text())
    let time = new Date().toLocaleString();
    let price = $('.otc-trade-list').eq(0).find('.price').text()
    let obj = {
      time:time,
      price:price
    }
    fs.writeFile('log.txt', JSON.stringify(obj), function(err){
  			console.log('write ok');
  		})
  })
}

getPrice();
