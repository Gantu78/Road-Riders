CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ejecutar este script manualmente si no se crea automáticamente
-- psql -h localhost -U RoadRiders -d RoadRiders -f src/init.sql