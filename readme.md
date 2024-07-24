# Node.js
in file ***'package.json'*** add in ***'scripts'*** for run server.js automatic: 
    
    "dev": "node --watch src/server.js"
- To run, print in terminal:
                    
        npm run dev

## HTTP Requisitions routines (inside back-end server)
Whe have two principals requisitions:

    HTTP Method and URL(addres)
---
#### HTTP Method
- ***GET*** : Search for resource in back-end.
- ***POST*** : Create(input) resource in back-end.
- ***PUT*** : Update massive-pack resources in back-end.
- ***PATCH*** : Update specific resource in back-end.
- ***DELETE*** : Delete resource in back-end.

              [Method]    [URL]     
        Ex:     GET    /  users  => Search for users in back-end.
                POST   /  users  => Create a new user in back-end.

## HTTP Headers 

when we use 'JSON'(commonly used for transmitting data in web applications), they he have a specific approach to be used in header.


        return response
            .setHeader('content-type', application/jason)

- ***Consult to see types of Headers: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers***
  
## Network Protocols: Stateless and stateful 
These two protocols are differentiated on the basis of the requirement of server or server-side software to save status or session information.
- Stateless Protocols are the type of network protocols in which Client send request to the server and server response back according to current state. It does not require the server to retain session information or a status about each communicating partner for multiple request. 

        Stateless Protocol: HTTP (Hypertext Transfer Protocol), UDP (User Datagram Protocol), DNS    (Domain Name System).

- In Stateful Protocol If client send a request to the server then it expects some kind of response, if it does not get any response then it resend the request.

        Stateful Protocol: FTP (File Transfer Protocol), TCP, and Telnet.
- ***Consult: https://www.geeksforgeeks.org/difference-between-stateless-and-stateful-protocol/***


## HTTP Status Code

In every IPA construction, whe have codes with IDs to represent status of the application .
 
 - HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

        Informational responses (100 – 199)
        Successful responses    (200 – 299)
        Redirection messages    (300 – 399)
        Client error responses  (400 – 499)
        Server error responses  (500 – 599)
- ***Consult: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status***

### Road to Commit
---
    To call: git add .
---
    To name: git commit -m 'commit-name'
---
    To send: git push -u origin main