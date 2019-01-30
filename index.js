'use strict';

const net = require('net');
const websocket = require('websocket-stream');
const minimist = require('minimist');
const pump = require('pump');

const argv = minimist(process.argv.slice(2), {
    alias: {
        from: 'f',
        to: 't',
        host: 'h'
    }
});

if (!argv.from || !argv.to) {
    console.error('Usage: ws-to-tcp --from [ws-port] --to [tcp-port] --host [tcp-host]');
    process.exit(1);
}

const {from: localPort, host = '127.0.0.1', to: port} = argv;
const target = net.connect(argv.to, argv.host);

websocket.createServer({port: localPort}, stream => {
    pump(stream, target, stream);
});

console.log(`Proxy from ${localPort} to ${host}:${port} started`);
