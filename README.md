:rocket: KeepCouncil
===========
Keeping up with your local City Council

### Prerequisites
Your host machine needs:
* Latest LTS Docker Engine and Docker-Compose.
* Ports `3000`, `3001`, `15432` to be free for frontend/api/db binding.
* PostgreSQL installed, running.
* You may need to give script execute access for the project `./scripts/` shell scripts (i.e. `chmod 755 ./scripts/clean.sh ./scripts/local-start.sh`).
* Create an `.env` file in project root and fill as (note Test/Production is omitted):
```
DEV_DATABASE_URL="postgresql://postgres:password@database:5432/keepcouncil?schema=public"
DEV_POSTGRES_USER=postgres
DEV_POSTGRES_PASSWORD=password
DEV_POSTGRES_DB=keepcouncil

INT_DATABASE_URL=
INT_POSTGRES_USER=
INT_POSTGRES_PASSWORD=
INT_POSTGRES_DB=

PROD_DATABASE_URL=
PROD_POSTGRES_USER=
PROD_POSTGRES_PASSWORD=
PROD_POSTGRES_DB=

AUTH_DOMAIN="dev-a4gfqbch.us.auth0.com"
AUTH_AUDIENCE="https://keepcouncil-api.com"

VUE_APP_AUTH_DOMAIN="dev-a4gfqbch.us.auth0.com"
VUE_APP_AUTH_AUDIENCE="https://keepcouncil-api.com"
VUE_APP_AUTH_CLIENT_ID="4shIPZCU09sGOkwA2ulEv66f3HuTUN1q"

```

### Local Development Build
* Make sure you have the prerequisites in place on your host machine.
* `./scripts/local-start.sh`
> If you tried running `./scripts/local-start.sh` before having all the prereqs you may have created some misconfigured docker images/containers that need to get rebuilt after all prereqs are in place. To do this you can run `./scripts/clean.sh` script **but be aware this will remove all docker images, containers, volumes, and networks on your host machine**.
* Access the local development frontend UI at `localhost:3000`.
* Access the local development api at `localhost:3001/api/v1/healthcheck`.
* PSQL into the local development database by running `./scripts/connect-local-db.sh`.

## :book: License
This project is not licensed for use.
