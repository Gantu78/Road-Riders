# Usa la imagen base oficial de Codespaces con Node.js
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# Instala PostgreSQL y dependencias en una sola línea
RUN apt-get update && apt-get install -y postgresql postgresql-contrib postgis postgresql-14-postgis-3 && rm -rf /var/lib/apt/lists/*

# Configura PostgreSQL como usuario postgres
USER postgres
RUN /etc/init.d/postgresql start && \
    psql --command "CREATE USER Road-Riders WITH PASSWORD 'road-riders';" && \
    psql --command "CREATE DATABASE Road-Riders OWNER Road-Riders;" && \
    psql --command "CREATE EXTENSION postgis;" -d cyclepulse

# Regresa a usuario root para el resto
USER root

# Instala herramientas globales
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