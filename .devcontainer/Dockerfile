FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# Instalar PostgreSQL, PostGIS y dependencias
RUN apt-get update && apt-get install -y \
    postgresql \
    postgresql-contrib \
    postgis \
    postgresql-14-postgis-3 \
    && rm -rf /var/lib/apt/lists/*

# Configurar PostgreSQL
USER postgres
RUN /etc/init.d/postgresql start && \
    psql --command "CREATE USER cyclepulse WITH PASSWORD 'cyclepulse';" && \
    psql --command "CREATE DATABASE cyclepulse OWNER cyclepulse;" && \
    psql --command "CREATE EXTENSION postgis;" -d cyclepulse

USER root

# Instalar herramientas globales
RUN npm install -g concurrently

# Configurar directorio de trabajo
WORKDIR /workspaces/Road-Riders

# Copiar dependencias del backend y frontend
COPY backend/package.json backend/package-lock.json ./backend/
COPY frontend/package.json frontend/package-lock.json ./frontend/

# Instalar dependencias
RUN cd backend && npm install
RUN cd frontend && npm install

# Copiar el resto del código
COPY . .

# Exponer puertos
EXPOSE 5000 3000