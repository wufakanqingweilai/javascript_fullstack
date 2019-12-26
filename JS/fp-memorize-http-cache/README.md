## 纯函数
1. 相同的输入会有相同的输出
2. 不会产生副作用
f(x) = x ^ 2
f(1) = 1
f(3) = 9
f(3) = 9

## 不纯函数
1. I/O 操作
2. Math.random()
3. appendChild ... DOM操作

## 纯函数的好处
1. 易于测试
2. 易于缓存


## 状态码
1. 200
2. 304 缓存，服务器不返回任何内容，浏览器从缓存里面取到内容

缓存的流程：
第一次请求：浏览器向服务器请求资源，服务器响应内容的时候，会设置当前的资源缓存的一些字段
响应头
1. expires (1.0) / cache-control(1.1): 时间
2. Etag      last-modified: 文件最后的修改时间

第二次请求的时候：
### 强缓存
1. 浏览器判断缓存有没有过期 (依据 cache-control)，如果没有，直接从缓存里取内容，不经过服务器
### 协商缓存
2. 过期：Etag存在 -> 携带 if-none-match: abcd 服务器决策 200? 304, 如果 304 从缓存里面取内容
3. 过期：Etag不存在 -> 携带 if-modified-since: last-modefied 服务器决策   200 ? 304