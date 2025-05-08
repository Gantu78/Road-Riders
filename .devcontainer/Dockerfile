# Usa la imagen base oficial de Codespaces con Node.js
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# Instala PostgreSQL y dependencias en una sola línea
RUN apt-get update && apt-get install -y nodejs npm
RUN apt-get update && apt-get install -y postgresql postgresql-contrib postgis postgresql-14-postgis-3 && rm -rf /var/lib/apt/lists/*

# Configura PostgreSQL como usuario postgres
# Configura PostgreSQL
USER postgres

# Inicia PostgreSQL, crea usuario, base de datos y configura autenticación
RUN /etc/init.d/postgresql start && \
    psql --command "CREATE USER road_riders WITH PASSWORD 'road';" && \
    psql --command "CREATE DATABASE road_riders OWNER road_riders;" && \
    psql --command "CREATE EXTENSION postgis;" -d road_riders && \
    echo "host all all all md5" >> /etc/postgresql/14/main/pg_hba.conf && \
    echo "listen_addresses='*'" >> /etc/postgresql/14/main/postgresql.conf

USER root

# Instala herramientas globales de Node.js
RUN npm install -g concurrently

# Establece el directorio de trabajo
WORKDIR /workspaces/Road-Riders

# Copia los archivos de dependencias
COPY backend/package.json backend/package-lock.json ./backend/
COPY frontend/package.json frontend/package-lock.json ./frontend/

# Instala dependencias
RUN cd backend && npm install
RUN cd frontend && npm install

# Copia el resto del código
COPY . .

# Expone los puertos
EXPOSE 5000 3000