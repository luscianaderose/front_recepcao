# Etapa 1: Compilar o projeto
FROM node:20.13.1 AS build

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o código-fonte para o contêiner
COPY . .

# Compilar o projeto React
RUN npm run build

# Etapa 2: Servir o projeto com o servidor Nginx
FROM nginx:stable-alpine

# Copiar os arquivos estáticos da build do React para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 para acessar o servidor
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]