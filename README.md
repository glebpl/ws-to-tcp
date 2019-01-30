# ws-to-tcp

Proxy from WebSockets to TCP

```
npm install -g ws-to-tcp
```

## Usage

```
# will proxy websockets from 8000
# to tcp sockets on 10.78.15.96:9000
ws-to-tcp --from 8000 --to 9000 --host 10.78.15.96
```

## Client Side
need convert ArrayBuff to string data.

```
const a2s = require('arraybuffer-to-string')
ws.onmessage = e => console.log(a2s(e.data));
```

## License

MIT
