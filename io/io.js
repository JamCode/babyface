
exports.connectionEntry = function(socket){
    console.log('connection');
    setInterval(function(){
        socket.emit('data', { msg:'hello babyface long connection' });
    }, 2000);
}
