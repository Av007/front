FROM node:23 as builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 80

CMD ["npx", "serve", "-s", "dist", "-l", "80"]
