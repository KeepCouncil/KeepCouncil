FROM postgres:14-alpine

ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB
ENV POSTGRES_USER $POSTGRES_USER
ENV POSTGRES_PASSWORD $POSTGRES_PASSWORD
ENV POSTGRES_DB $POSTGRES_DB

WORKDIR /database

HEALTHCHECK --interval=10s --start-period=10s --timeout=4s --retries=3 \
  CMD pg_isready -U postgres

COPY ./packages/database/init.sql ./packages/database/pg_hba.conf /tmp/
COPY ./packages/database/init.sh /docker-entrypoint-initdb.d/

RUN chmod 755 /docker-entrypoint-initdb.d/init.sh /tmp/pg_hba.conf /tmp/init.sql

USER postgres

EXPOSE 5432
