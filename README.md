# Nest API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

## Description

A simple RESTful API to practice NestJS framework and habilities on others techs, like typscript, sql and docker.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# containers
$ docker-compose up -d

# start
$ npm start
```

### Routes

#### - User

```http
  POST /user - create
  GET /user/:id - find one by id
  GET /user -  find all
  PUT /user/:id - update one
  DELETE /user/:id - delete one
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |

```json
{
    "name": "Rodrigo",
    "email": "email@gmail.com",
    "password": "123456"
}
```

