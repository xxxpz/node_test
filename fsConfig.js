// 文件系统 模仿标准的POSIX函数与文件进行交互
const fs = require('fs');

// fs.unlink('./xxxpz.txt', (err, data) => { // 删除一个文件 异步的
//   if (!err) {
//     console.log(data)
//   }
//   console.log(err);
// })

// // 同步的删除一个文件
// try {
//   fs.unlinkSync('./callbacks.js')
//   console.log('删除成功')

// } catch (err) {
//   console.log('删除失败')
// }

/*
  使用异步方法无法保证顺序， fs.stat() 可能在rename()之前
*/

// fs.rename('./xxxpz.txt', 'lijian.txt', (err, data) => {
//   if (!err) { // 修改名称，同目录下
//     console.log('ok')
//   }
// })

// fs.stat('./lijian.txt', (err) => {
//   if (!err) { // 查看文件是否存在
//     console.log('文件存在')
//   }
// })

// 如果要保存顺序
// fs.rename('./xxxpz.txt', 'lijian.txt', (err, data) => {
//   if (!err) { // 修改名称，同目录下
//     fs.stat('./lijian.txt', (err) => {
//       if (!err) { // 查看文件是否存在
//         console.log('文件存在')
//       }
//     })
//   }
//   console.log(err)
// })

// 文件路径

// fs.open('./lijian.txt', 'r', (err, fd) => { // 使用绝对路径
//   if (err) throw err;
//   console.log(fd)
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   })
// })

// fs.open('lijian.txt', 'r', (err, fd) => { // 相对路径  相对与process.cwd()
//   if (err) throw err;
//   console.log(fd)
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   })
// })
