// node 的回调函数

// 在node 中使用回调函数可以提高node的性能

// r

//------------------------------------------------------
// 阻塞代码
var fs = require('fs');

// var data = fs.readFileSync('no_call_input.txt');

// console.log(data.toString());

// ---------------------------------------------------------
// 非阻塞代码

fs.readFile('no_call_input.txt', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.info(data.toJSON());
  }
});
