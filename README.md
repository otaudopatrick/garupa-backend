# garupa-backend

# 🔖 Sobre

Api de usuário.


## 👍🏻 Como baixar

```bash

    // Clonar repositório
    $ git clone https://github.com/otaudopatrick/garupa-backend.git

    // Acessar diretório
    $ cd garupa-backend

    // Instalar dependências
    $ npm install

    // Iniciar projeto
    $ npm start
```

---

## 👍🏻 Endpoints

## Criar nova conta

### Request

`POST /api/signup`

    {"firstName": "any_first_name","lastName": "any_last_name","email": "any_email@any.com","password": "any_password","passwordConfirmation": "any_password"}

### Response


    {   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjU2OTQ5NTU0fQ.Leq7yQzsZl42VyeagoiDDwTBQAb7xdi92DvtX5KxPFQ","firstName": "any_first_name",
    "lastName": "any_last_name"}

## Login

### Request

`POST /api/login`

    {"email":"any@any.com,"password":"any"}

### Response


    {"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjU2OTYwNDAwfQ.q8ZX2zSh2yXZARfO3qaR2D8jZvdLA50njkWbhppsJLE","id": 4}


## Buscar conta por id

### Request

`GET /api/user/:accountId`


### Response
    { "id": 5, "firstName": "any", "lastName": "any", "email": "any@any.com" }

## Deletar por id

### Request

`DELETE /user/:accountId`


### Response
    {  }



