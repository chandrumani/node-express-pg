# node-express-pg
This is a simple Node js Application built on With express and postgres

# Setting up Database

Pull pg docker image 

`docker pull postgres`

Run docker image in terminal

`docker run -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres`

2 ways to connect to the DB

Either through some client using below params
host: localhost

database: postgres

user: postgres

password: 1234


or through docker 

`docker exec -it <container ID> bash`

You can obtain container id by executing `docker ps`

`psql -U postgres`

```
postgres=# CREATE USER pgadm;
postgres-# CREATE DATABASE pgdb;
postgres-# GRANT ALL PRIVILEGES ON DATABASE pgdb TO pgadm;
postgres=# ALTER ROLE pgadm WITH PASSWORD '1234';
```

Clone the repo and Start the node server using `node server.js`

All models will be created as tables in Postgres DB.

Access the API's through Postman. Exposed API's are:

`http://localhost:4500/api/user`

`http://localhost:4500/api/waybill`

GET, POST, PUT, DELETE API's are available endpoints

