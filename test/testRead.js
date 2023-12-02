var fs = require("fs");
var count = 20
var timer = null
fs.open("/Users/bill/Library/Application Support/nw-minxin/Default/mynedb/message_12584.db","w",function(err,fp){
 if(err) return console.error(err);
 // 这里面可以进行我们的操作
//  fs.close(fp);
timer = setInterval(function(){
  count--
  if(count < 1){
    clearInterval(timer)
    console.log("关闭")
    fs.close(fp);
  }
  console.log("持续使用")
},3000)

});
