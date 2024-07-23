import http from 'node:http'
import { addAbortSignal } from 'node:stream'

const server = http.createServer((req, res) => {
    return res.end('hello 3')
})

server.listen(3333) //localhost:3333
