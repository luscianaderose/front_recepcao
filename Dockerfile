FROM node:20.13.1

COPY . /app
WORKDIR /app

RUN npm i

CMD npm run dev -- --host