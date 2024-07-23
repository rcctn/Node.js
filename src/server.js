import http from 'node:http'
import { addAbortSignal } from 'node:stream'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method == 'GET' && url == '/users') {
        return res
            .setHeader('content-type', application/jason) 
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id: '1',
            name: 'jay cole',
            email: 'jcole@example.com'
        })
        return res.end('Criação de usuários')
    }

    return res.end('d')
})



server.listen(3333) //localhost:3333
