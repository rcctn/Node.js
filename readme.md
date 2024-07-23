# Node.js
in file ***'package.json'*** add in ***'scripts'*** for run server.js automatic: 
    
    "dev": "node --watch src/server.js"
- To run, print in terminal:
                    
        npm run dev

## HTTP Requisitions routines (inside back-end server)
For start whe have two principals requisitions:

    HTTP Method and URL (addres)
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


## HTTP Status Code


### Road to Commit
---
    To call: git add .
---
    To name: git commit -m 'commit-name'
---
    To send: git push -u origin main