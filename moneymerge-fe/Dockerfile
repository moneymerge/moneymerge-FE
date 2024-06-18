FROM node:18.17.0

WORKDIR /app

COPY package.json /app

RUN npm install -g npm@10.8.1

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

ENV CHOKIDAR_USEPOLLING=true