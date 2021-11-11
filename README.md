# auth-api-project

## install

1. copy the link of the repo
1. clone the repo on your local machine by `git clone repo-url`
1. download independencies by `npm i`
1. create a `.env`, then cope the content of `.env.sample` file inside the `.env` file.
1. fill the variables of `.env`
1. run the app

### Setup

#### `.env` requirement

- `PORT` - port number
- `DATABASE_URL` - postgres://localhost:5432/dbName
- `SECRET` - a random secret for encryption

#### Running the app

- either:

  1. `npm start`
  1. `nodemon`

- through `postman` or `thunder client`

- **Sign Up**: `http://localhost:5555/signup`

  - send an `json` object as follow:

    ![signup](./img/signupReq.PNG)

  - returns user Object as saved in DB

    ![Object](./img/signupRes.PNG)

- **Sign In**: `http://localhost:3001/signin`

  - send in headers username and password as follow :  
    ![signin](./img/signinReq.PNG)

  - returns Object

    ![Object](./img/signinRes.PNG)

-

- **/users endpoint**: `http://localhost:3001/users`

  - send bearer authentications as follow:
    ![users](./img/usersReq.PNG)

  - return an array of users
    ![res](./img/usersRes.PNG)

#### Jobs endpoints

- **GET All**: `http://localhost:3001/api/v1/jobs`

  - send a get request and return an array as follow:  
    ![jobs](./img/getAll.PNG)

- **GET BY ID** : `http://localhost:3001/api/v1/jobs/:<_id>`

  - send a get request with a bearer authentication as follow:  
    ![jobs](./img/get1jobReq.PNG)

  - return an object  
    ![res](./img/get1jobRes.PNG)

- **POST** : `http://localhost:3001/api/v1/jobs`

  - send a post request as follow:  
    ![post](./img/jobReq.PNG)
  - return an object  
    ![res](./img/jobRes.PNG)

- **PUT**: `http://localhost:3001/api/v1/jobs/:<_id>`

  - send a put request as follow:  
    ![put](./img/putjob.PNG)
  - returns the updated object  
    ![res](./img/putRes.PNG)

- **DELETE** : `http://localhost:3001/api/v1/jobs/:<_id>`
  - send a delete request as follow:  
    ![del](./img/deletejob.PNG)

#### Test

- Unit test: `npm run test`
- Lint test: `npm run lint`

### UML:

![uml](./img/auth-api.jpg)

### Deployed link on Herouku:
- https://job-post-401.herokuapp.com/ 
