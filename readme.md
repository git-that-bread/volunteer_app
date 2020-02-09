# Senior Project / Volunteer Coordination App
A MERN stack application for local Gainesville non-profit organizations to manage and coordinate volunteers.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/) (Not necessary if we decide to use MLab or other cloud service)

### Contributing
#### Cloning
Clone this repo to your local machine using `https://github.com/git-that-bread/volunteer_app`

#### Making changes
1. Create a branch locally and commit and push changes on this branch.
2. Create a pull request here https://github.com/git-that-bread/volunteer_app/compare
3. Describe the changes you're making in your PR.
4. Allow at least 2 member to approve your PR before merging.
   
### Installing
1. Install all server dependencies by running
`npm install` or `npm i` from the /server directory.

2. Install all client dependencies by running `npm run client-install` from /server or running `npm install`/`npm i` from /client.

### Running in Development
To run this application, first ensure you have all dependencies installed see [Installing](#Installing)

To run the server (from /server):

    npm run start 
or
    
    npm run server

to run a node demon


To run the client (from /server):

    npm run client

To run the client (from /client):

    npm run start

To run both the server and the client concurrently (from /server):

    npm run dev

### Current Project Directory Structure:
```
client/
    - public/
        - assets/
        - index.html
    - src/
        - components/
        - App.js
        - App.css
        - index.js

server/  
    - config/
        - db.js
        - default.json
    - models/
    - routes/
    - server.js

.gitignore
README.md
```


### Collaborators/Members/Roles:
- Product Manager: Duncan Adkins
- Technical Lead: Nataly Carbonell
- Security: Brett Chevalier
- QA & Testing: Jacob Graves







