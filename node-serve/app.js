//导入http内置模板
const http = require('http')


//创建一个http服务器
const server = http.createServer()
//监听 http 服务器的request 请求
server.on('request' , function(req,res){
    //write you code here
})


//指定端口号并启动服务器监听
server.listen(300,function(){
    console.log('server listen at http://127.0.0.1:3000')
})