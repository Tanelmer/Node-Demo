var http = require('http')
var opt = {
   host:'45.76.195.243',
   port:'2345',
   method:'GET',//这里是发送的方法
   path:'https://otc.huobi.pro/#/trade?coin=2&type=0',     //这里是访问的路径
   // path:'https://www.google.com',
   headers:{
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive'
   }
}
//以下是接受数据的代码
var body = '';
var req = http.request(opt, function(res) {
  console.log("Got response: " + res.statusCode);
  res.on('data',function(d){
  body += d;
 }).on('end', function(){
  console.log(res.headers)
  console.log(body)
 });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
req.end();
