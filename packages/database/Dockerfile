FROM postgres:14-alpine

WORKDIR /database

COPY ./packages/database/init.sql ./packages/database/pg_hba.conf /tmp/
COPY ./packages/database/init.sh /docker-entrypoint-initdb.d/

RUN chmod 755 /docker-entrypoint-initdb.d/init.sh /tmp/pg_hba.conf /tmp/init.sql

USER postgres

EXPOSE 5432
