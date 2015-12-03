# node-serialization-benchmark

```
$ npm install
$ node index.js

json encode compress percent: 0%
json encode: 8.084ms
json decode: 9.247ms
-----------------------
pomelo-protobuf encode compress percent: 59%
pomelo-protobuf encode: 66.002ms
pomelo-protobuf decode: 18.488ms
-----------------------
protobufjs encode compress percent: 59%
protobufjs encode: 132.895ms
protobufjs decode: 47.365ms
-----------------------
protocol-buffers encode compress percent: 59%
protocol-buffers encode: 27.431ms
protocol-buffers decode: 11.272ms
-----------------------
pson encode compress percent: 34%
pson encode: 126.346ms
pson decode: 20.237ms
-----------------------
```
