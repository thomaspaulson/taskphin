# Brew apps

## Requirement

| Technology | Version |
| ---------- | ------- |
| Node       | V18     |
| MongoDB    |         |

## Development

```
docker compose run --rm \
    -w /home \
    node \
    npm install
```

`docker compose up -d`

`docker compose down`

## Install additional dependency

    docker compose run --rm \
        -w /home \
        node \
        npm install --save sequelize pg pg-hstore

    docker compose run --rm \
        -w /home \
        node \
        npm install express-ejs-layouts ejs

    docker compose run --rm \
        -w /home \
        node \
        npm install express-session

    docker compose run --rm \
        -w /home \
        node \
        npm install connect-flash

    docker compose run --rm \
        -w /home \
        node \
        npm install method-override

### change file ownershp

sudo chown -R $USER: .

## reference on docker

https://serversforhackers.com/dockerized-app/
