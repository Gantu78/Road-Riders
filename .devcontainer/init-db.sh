#!/bin/bash
/etc/init.d/postgresql start

# Esperar a que el servicio arranque
sleep 5

# Crear usuario, base de datos y extensión si no existen
sudo -u postgres psql <<EOF
DO
\$do\$
BEGIN
   IF NOT EXISTS (
      SELECT
      FROM   pg_catalog.pg_user
      WHERE  usename = 'Road-Riders') THEN
      CREATE USER "Road-Riders" WITH PASSWORD 'road-riders';
   END IF;
END
\$do\$;

CREATE DATABASE "Road-Riders" OWNER "Road-Riders";
\c "Road-Riders"
CREATE EXTENSION IF NOT EXISTS postgis;
EOF
