# Node.js api cep

* [Guidelines](#guidelines)
* [HTTP Verbs](#http-verbs)
* [Authentication](#authentication)

## Guidelines

Architetura/Principios utilizada:
* [MVC]
* [Single Responsibility Principle]

## HTTP Verbs
HTTP REST devem ser consumidos como na instrução abaixo:

| ENDPOINT    | HTTP METODO     | PARAMETRO | DESCRIÇÃO |
| ----------- | --------------- | --------- | ---------------------------------------------------------------------- |  
| /viacep     | POST            | ?cep=:cep | Retorna JSON com informações do cep digitado, dados consumidos viacep  |

## Examplo

http://localhost:3999/viacep?cep=29164256

    "response": {
      "cep": "29164-256",
      "logradouro": "Rua Elmo Vieira",
      "complemento": "",
      "bairro": "Camará",
      "localidade": "Serra",
      "uf": "ES",
      "ibge": "3205002",
      "gia": "",
      "ddd": "27",
      "siafi": "5699",
      "cache": true
    }

Propiedades "cep", "logradouro", "complemento", "bairro", "localidade", "uf", "ibge", "gia", "ddd", "siafi": São propiedades retornadas viacep;


Propiedade "cache": Solução de cache utilizada para retorno de requisições com mesmo cep;

* true - Busca dos dados diretamente do cache 
* false - Busca dos dados diretamente da requisição api


## Authentication

### API Resources

  - [POST /viacep/?cep=:cep](#post-viacep)

### POST /viacep (sem autenticação)

`POST /viacep/?cep=:cep`
    
    curl --request  POST "http://localhost:3999/viacep/?cep=29164256"

Response body:

    {
      "code": 401,
      "message": "Unauthorized"
    }


### POST /viacep (com autenticação)

Examplo: http://localhost:3999/viacep/cep=29164256

`POST /viacep/?cep=:cep`

    curl -i -H 'teste: 123456' http://localhost:3999/viacep/?cep=29164256

Request body:

    {
        "cep": "29164-256",
        "logradouro": "Rua Elmo Vieira",
        "complemento": "",
        "bairro": "Camará",
        "localidade": "Serra",
        "uf": "ES",
        "ibge": "3205002",
        "gia": "",
        "ddd": "27",
        "siafi": "5699",
        "cache": true
    }
