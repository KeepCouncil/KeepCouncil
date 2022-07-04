create database powwow owner postgres;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT USAGE ON schema public TO postgres;
ALTER ROLE postgres SET statement_timeout='300000';
\c powwow;
