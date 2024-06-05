-- This is for when rebuilding the schema, that postgres has a db to switch off too to be able to select the correct db to drop
\c postgres;

-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

