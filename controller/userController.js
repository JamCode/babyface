var userModel = require('../model/userModel.js');
var userController = {};
var log = require('../utility/log.js');

userController.get = function(req, res){
    userModel.getUserCount(function(err, data){
        var returnData = {};
        if (err) {
            log.error(log.reqStr(req)+' '+err, log.getFileNameAndLineNum(__filename));
            returnData.code = err.code;
            returnData.msg = err;
        }else{
            returnData.code = 0;
            returnData.data = data;
        }
        res.send(returnData);
    });
}

userController.post = function(req, res){

}

userController.put = function(req, res){

}


userController.delete = function(req, res){

}



// IncomingMessage {
//     _readableState: ReadableState {
//         objectMode: false,
//         highWaterMark: 16384,
//         buffer: [],
//         length: 0,
//         pipes: null,
//         pipesCount: 0,
//         flowing: null,
//         ended: false,
//         endEmitted: false,
//         reading: false,
//         sync: true,
//         needReadable: false,
//         emittedReadable: false,
//         readableListening: false,
//         defaultEncoding: 'utf8',
//         ranOut: false,
//         awaitDrain: 0,
//         readingMore: false,
//         decoder: null,
//         encoding: null
//     },
//     readable: true,
//     domain: null,
//     _events: {},
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     socket: Socket {
//         _connecting: false,
//         _hadError: false,
//         _handle: TCP {
//             _externalStream: {},
//             fd: 22,
//             reading: true,
//             owner: [Circular],
//             onread: [Function: onread],
//             onconnection: null,
//             writeQueueSize: 0
//         },
//         _parent: null,
//         _host: null,
//         _readableState: ReadableState {
//             objectMode: false,
//             highWaterMark: 16384,
//             buffer: [],
//             length: 0,
//             pipes: null,
//             pipesCount: 0,
//             flowing: true,
//             ended: false,
//             endEmitted: false,
//             reading: true,
//             sync: false,
//             needReadable: true,
//             emittedReadable: false,
//             readableListening: false,
//             defaultEncoding: 'utf8',
//             ranOut: false,
//             awaitDrain: 0,
//             readingMore: false,
//             decoder: null,
//             encoding: null,
//             resumeScheduled: false
//         },
//         readable: true,
//         domain: null,
//         _events: {
//             end: [Object],
//             finish: [Function: onSocketFinish],
//             _socketEnd: [Function: onSocketEnd],
//             drain: [Object],
//             timeout: [Function],
//             error: [Function: socketOnError],
//             close: [Object],
//             data: [Function: socketOnData],
//             resume: [Function: onSocketResume],
//             pause: [Function: onSocketPause]
//         },
//         _eventsCount: 10,
//         _maxListeners: undefined,
//         _writableState: WritableState {
//             objectMode: false,
//             highWaterMark: 16384,
//             needDrain: false,
//             ending: false,
//             ended: false,
//             finished: false,
//             decodeStrings: false,
//             defaultEncoding: 'utf8',
//             length: 0,
//             writing: false,
//             corked: 0,
//             sync: true,
//             bufferProcessing: false,
//             onwrite: [Function],
//             writecb: null,
//             writelen: 0,
//             bufferedRequest: null,
//             lastBufferedRequest: null,
//             pendingcb: 0,
//             prefinished: false,
//             errorEmitted: false
//         },
//         writable: true,
//         allowHalfOpen: true,
//         destroyed: false,
//         bytesRead: 0,
//         _bytesDispatched: 0,
//         _sockname: null,
//         _pendingData: null,
//         _pendingEncoding: '',
//         server: Server {
//             domain: null,
//             _events: [Object],
//             _eventsCount: 5,
//             _maxListeners: undefined,
//             _connections: 1,
//             _handle: [Object],
//             _usingSlaves: false,
//             _slaves: [],
//             _unref: false,
//             allowHalfOpen: true,
//             pauseOnConnect: false,
//             httpAllowHalfOpen: false,
//             timeout: 120000,
//             _pendingResponseData: 0,
//             _connectionKey: '6::::3001'
//         },
//         _idleTimeout: 120000,
//         _idleNext: {
//             _idleNext: [Circular],
//             _idlePrev: [Circular]
//         },
//         _idlePrev: {
//             _idleNext: [Circular],
//             _idlePrev: [Circular]
//         },
//         _idleStart: 2930,
//         parser: HTTPParser {
//             '0': [Function: parserOnHeaders],
//             '1': [Function: parserOnHeadersComplete],
//             '2': [Function: parserOnBody],
//             '3': [Function: parserOnMessageComplete],
//             '4': [Function: onParserExecute],
//             _headers: [],
//             _url: '',
//             _consumed: true,
//             socket: [Circular],
//             incoming: [Circular],
//             maxHeaderPairs: 2000,
//             onIncoming: [Function: parserOnIncoming]
//         },
//         on: [Function: socketOnWrap],
//         _paused: false,
//         read: [Function],
//         _consuming: true,
//         _httpMessage: ServerResponse {
//             domain: null,
//             _events: [Object],
//             _eventsCount: 1,
//             _maxListeners: undefined,
//             output: [],
//             outputEncodings: [],
//             outputCallbacks: [],
//             outputSize: 0,
//             writable: true,
//             _last: false,
//             chunkedEncoding: false,
//             shouldKeepAlive: true,
//             useChunkedEncodingByDefault: true,
//             sendDate: true,
//             _removedHeader: {},
//             _contentLength: null,
//             _hasBody: true,
//             _trailer: '',
//             finished: false,
//             _headerSent: false,
//             socket: [Circular],
//             connection: [Circular],
//             _header: null,
//             _headers: [Object],
//             _headerNames: [Object],
//             _onPendingData: [Function: updateOutgoingData],
//             req: [Circular],
//             locals: {}
//         }
//     },
//     connection: Socket {
//         _connecting: false,
//         _hadError: false,
//         _handle: TCP {
//             _externalStream: {},
//             fd: 22,
//             reading: true,
//             owner: [Circular],
//             onread: [Function: onread],
//             onconnection: null,
//             writeQueueSize: 0
//         },
//         _parent: null,
//         _host: null,
//         _readableState: ReadableState {
//             objectMode: false,
//             highWaterMark: 16384,
//             buffer: [],
//             length: 0,
//             pipes: null,
//             pipesCount: 0,
//             flowing: true,
//             ended: false,
//             endEmitted: false,
//             reading: true,
//             sync: false,
//             needReadable: true,
//             emittedReadable: false,
//             readableListening: false,
//             defaultEncoding: 'utf8',
//             ranOut: false,
//             awaitDrain: 0,
//             readingMore: false,
//             decoder: null,
//             encoding: null,
//             resumeScheduled: false
//         },
//         readable: true,
//         domain: null,
//         _events: {
//             end: [Object],
//             finish: [Function: onSocketFinish],
//             _socketEnd: [Function: onSocketEnd],
//             drain: [Object],
//             timeout: [Function],
//             error: [Function: socketOnError],
//             close: [Object],
//             data: [Function: socketOnData],
//             resume: [Function: onSocketResume],
//             pause: [Function: onSocketPause]
//         },
//         _eventsCount: 10,
//         _maxListeners: undefined,
//         _writableState: WritableState {
//             objectMode: false,
//             highWaterMark: 16384,
//             needDrain: false,
//             ending: false,
//             ended: false,
//             finished: false,
//             decodeStrings: false,
//             defaultEncoding: 'utf8',
//             length: 0,
//             writing: false,
//             corked: 0,
//             sync: true,
//             bufferProcessing: false,
//             onwrite: [Function],
//             writecb: null,
//             writelen: 0,
//             bufferedRequest: null,
//             lastBufferedRequest: null,
//             pendingcb: 0,
//             prefinished: false,
//             errorEmitted: false
//         },
//         writable: true,
//         allowHalfOpen: true,
//         destroyed: false,
//         bytesRead: 0,
//         _bytesDispatched: 0,
//         _sockname: null,
//         _pendingData: null,
//         _pendingEncoding: '',
//         server: Server {
//             domain: null,
//             _events: [Object],
//             _eventsCount: 5,
//             _maxListeners: undefined,
//             _connections: 1,
//             _handle: [Object],
//             _usingSlaves: false,
//             _slaves: [],
//             _unref: false,
//             allowHalfOpen: true,
//             pauseOnConnect: false,
//             httpAllowHalfOpen: false,
//             timeout: 120000,
//             _pendingResponseData: 0,
//             _connectionKey: '6::::3001'
//         },
//         _idleTimeout: 120000,
//         _idleNext: {
//             _idleNext: [Circular],
//             _idlePrev: [Circular]
//         },
//         _idlePrev: {
//             _idleNext: [Circular],
//             _idlePrev: [Circular]
//         },
//         _idleStart: 2930,
//         parser: HTTPParser {
//             '0': [Function: parserOnHeaders],
//             '1': [Function: parserOnHeadersComplete],
//             '2': [Function: parserOnBody],
//             '3': [Function: parserOnMessageComplete],
//             '4': [Function: onParserExecute],
//             _headers: [],
//             _url: '',
//             _consumed: true,
//             socket: [Circular],
//             incoming: [Circular],
//             maxHeaderPairs: 2000,
//             onIncoming: [Function: parserOnIncoming]
//         },
//         on: [Function: socketOnWrap],
//         _paused: false,
//         read: [Function],
//         _consuming: true,
//         _httpMessage: ServerResponse {
//             domain: null,
//             _events: [Object],
//             _eventsCount: 1,
//             _maxListeners: undefined,
//             output: [],
//             outputEncodings: [],
//             outputCallbacks: [],
//             outputSize: 0,
//             writable: true,
//             _last: false,
//             chunkedEncoding: false,
//             shouldKeepAlive: true,
//             useChunkedEncodingByDefault: true,
//             sendDate: true,
//             _removedHeader: {},
//             _contentLength: null,
//             _hasBody: true,
//             _trailer: '',
//             finished: false,
//             _headerSent: false,
//             socket: [Circular],
//             connection: [Circular],
//             _header: null,
//             _headers: [Object],
//             _headerNames: [Object],
//             _onPendingData: [Function: updateOutgoingData],
//             req: [Circular],
//             locals: {}
//         }
//     },
//     httpVersionMajor: 1,
//     httpVersionMinor: 1,
//     httpVersion: '1.1',
//     complete: false,
//     headers: {
//         host: '127.0.0.1:3001',
//         connection: 'keep-alive',
//         'cache-control': 'max-age=0',
//         accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//         'upgrade-insecure-requests': '1',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36',
//         'accept-encoding': 'gzip, deflate, sdch',
//         'accept-language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
//         'if-none-match': 'W/"5-XUFAKrxLKna5cZ2REBfFkg"'
//     },
//     rawHeaders: ['Host', '127.0.0.1:3001', 'Connection', 'keep-alive', 'Cache-Control', 'max-age=0', 'Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'Upgrade-Insecure-Requests', '1', 'User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36', 'Accept-Encoding', 'gzip, deflate, sdch', 'Accept-Language', 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4', 'If-None-Match', 'W/"5-XUFAKrxLKna5cZ2REBfFkg"'],
//     trailers: {},
//     rawTrailers: [],
//     upgrade: false,
//     url: '/user',
//     method: 'GET',
//     statusCode: null,
//     statusMessage: null,
//     client: Socket {
//         _connecting: false,
//         _hadError: false,
//         _handle: TCP {
//             _externalStream: {},
//             fd: 22,
//             reading: true,
//             owner: [Circular],
//             onread: [Function: onread],
//             onconnection: null,
//             writeQueueSize: 0
//         },
//         _parent: null,
//         _host: null,
//         _readableState: ReadableState {
//             objectMode: false,
//             highWaterMark: 16384,
//             buffer: [],
//             length: 0,
//             pipes: null,
//             pipesCount: 0,
//             flowing: true,
//             ended: false,
//             endEmitted: false,
//             reading: true,
//             sync: false,
//             needReadable: true,
//             emittedReadable: false,
//             readableListening: false,
//             defaultEncoding: 'utf8',
//             ranOut: false,
//             awaitDrain: 0,
//             readingMore: false,
//             decoder: null,
//             encoding: null,
//             resumeScheduled: false
//         },
//         readable: true,
//         domain: null,
//         _events: {
//             end: [Object],
//             finish: [Function: onSocketFinish],
//             _socketEnd: [Function: onSocketEnd],
//             drain: [Object],
//             timeout: [Function],
//             error: [Function: socketOnError],
//             close: [Object],
//             data: [Function: socketOnData],
//             resume: [Function: onSocketResume],
//             pause: [Function: onSocketPause]
//         },
//         _eventsCount: 10,
//         _maxListeners: undefined,
//         _writableState: WritableState {
//             objectMode: false,
//             highWaterMark: 16384,
//             needDrain: false,
//             ending: false,
//             ended: false,
//             finished: false,
//             decodeStrings: false,
//             defaultEncoding: 'utf8',
//             length: 0,
//             writing: false,
//             corked: 0,
//             sync: true,
//             bufferProcessing: false,
//             onwrite: [Function],
//             writecb: null,
//             writelen: 0,
//             bufferedRequest: null,
//             lastBufferedRequest: null,
//             pendingcb: 0,
//             prefinished: false,
//             errorEmitted: false
//         },
//         writable: true,
//         allowHalfOpen: true,
//         destroyed: false,
//         bytesRead: 0,
//         _bytesDispatched: 0,
//         _sockname: null,
//         _pendingData: null,
//         _pendingEncoding: '',
//         server: Server {
//             domain: null,
//             _events: [Object],
//             _eventsCount: 5,
//             _maxListeners: undefined,
//             _connections: 1,
//             _handle: [Object],
//             _usingSlaves: false,
//             _slaves: [],
//             _unref: false,
//             allowHalfOpen: true,
//             pauseOnConnect: false,
//             httpAllowHalfOpen: false,
//             timeout: 120000,
//             _pendingResponseData: 0,
//             _connectionKey: '6::::3001'
//         },
//         _idleTimeout: 120000,
//         _idleNext: {
//             _idleNext: [Circular],
//             _idlePrev: [Circular]
//         },
//         _idlePrev: {
//             _idleNext: [Circular],
//             _idlePrev: [Circular]
//         },
//         _idleStart: 2930,
//         parser: HTTPParser {
//             '0': [Function: parserOnHeaders],
//             '1': [Function: parserOnHeadersComplete],
//             '2': [Function: parserOnBody],
//             '3': [Function: parserOnMessageComplete],
//             '4': [Function: onParserExecute],
//             _headers: [],
//             _url: '',
//             _consumed: true,
//             socket: [Circular],
//             incoming: [Circular],
//             maxHeaderPairs: 2000,
//             onIncoming: [Function: parserOnIncoming]
//         },
//         on: [Function: socketOnWrap],
//         _paused: false,
//         read: [Function],
//         _consuming: true,
//         _httpMessage: ServerResponse {
//             domain: null,
//             _events: [Object],
//             _eventsCount: 1,
//             _maxListeners: undefined,
//             output: [],
//             outputEncodings: [],
//             outputCallbacks: [],
//             outputSize: 0,
//             writable: true,
//             _last: false,
//             chunkedEncoding: false,
//             shouldKeepAlive: true,
//             useChunkedEncodingByDefault: true,
//             sendDate: true,
//             _removedHeader: {},
//             _contentLength: null,
//             _hasBody: true,
//             _trailer: '',
//             finished: false,
//             _headerSent: false,
//             socket: [Circular],
//             connection: [Circular],
//             _header: null,
//             _headers: [Object],
//             _headerNames: [Object],
//             _onPendingData: [Function: updateOutgoingData],
//             req: [Circular],
//             locals: {}
//         }
//     },
//     _consuming: false,
//     _dumped: false,
//     next: [Function: next],
//     baseUrl: '/user',
//     originalUrl: '/user/user',
//     _parsedUrl: Url {
//         protocol: null,
//         slashes: null,
//         auth: null,
//         host: null,
//         port: null,
//         hostname: null,
//         hash: null,
//         search: null,
//         query: null,
//         pathname: '/user',
//         path: '/user',
//         href: '/user',
//         _raw: '/user'
//     },
//     params: {},
//     query: {},
//     res: ServerResponse {
//         domain: null,
//         _events: {
//             finish: [Function: resOnFinish]
//         },
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         output: [],
//         outputEncodings: [],
//         outputCallbacks: [],
//         outputSize: 0,
//         writable: true,
//         _last: false,
//         chunkedEncoding: false,
//         shouldKeepAlive: true,
//         useChunkedEncodingByDefault: true,
//         sendDate: true,
//         _removedHeader: {},
//         _contentLength: null,
//         _hasBody: true,
//         _trailer: '',
//         finished: false,
//         _headerSent: false,
//         socket: Socket {
//             _connecting: false,
//             _hadError: false,
//             _handle: [Object],
//             _parent: null,
//             _host: null,
//             _readableState: [Object],
//             readable: true,
//             domain: null,
//             _events: [Object],
//             _eventsCount: 10,
//             _maxListeners: undefined,
//             _writableState: [Object],
//             writable: true,
//             allowHalfOpen: true,
//             destroyed: false,
//             bytesRead: 0,
//             _bytesDispatched: 0,
//             _sockname: null,
//             _pendingData: null,
//             _pendingEncoding: '',
//             server: [Object],
//             _idleTimeout: 120000,
//             _idleNext: [Object],
//             _idlePrev: [Object],
//             _idleStart: 2930,
//             parser: [Object],
//             on: [Function: socketOnWrap],
//             _paused: false,
//             read: [Function],
//             _consuming: true,
//             _httpMessage: [Circular]
//         },
//         connection: Socket {
//             _connecting: false,
//             _hadError: false,
//             _handle: [Object],
//             _parent: null,
//             _host: null,
//             _readableState: [Object],
//             readable: true,
//             domain: null,
//             _events: [Object],
//             _eventsCount: 10,
//             _maxListeners: undefined,
//             _writableState: [Object],
//             writable: true,
//             allowHalfOpen: true,
//             destroyed: false,
//             bytesRead: 0,
//             _bytesDispatched: 0,
//             _sockname: null,
//             _pendingData: null,
//             _pendingEncoding: '',
//             server: [Object],
//             _idleTimeout: 120000,
//             _idleNext: [Object],
//             _idlePrev: [Object],
//             _idleStart: 2930,
//             parser: [Object],
//             on: [Function: socketOnWrap],
//             _paused: false,
//             read: [Function],
//             _consuming: true,
//             _httpMessage: [Circular]
//         },
//         _header: null,
//         _headers: {
//             'x-powered-by': 'Express'
//         },
//         _headerNames: {
//             'x-powered-by': 'X-Powered-By'
//         },
//         _onPendingData: [Function: updateOutgoingData],
//         req: [Circular],
//         locals: {}
//     },
//     body: {},
//     route: Route {
//         path: '/user',
//         stack: [[Object], [Object], [Object], [Object]],
//         methods: {
//             get: true,
//             put: true,
//             post: true,
//             delete: true
//         }
//     }
// }








module.exports = userController;
