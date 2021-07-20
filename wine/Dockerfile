FROM node:14

WORKDIR /usr/server

COPY package*.json /usr/server

RUN npm install 

COPY . /usr/server

EXPOSE 8000

CMD [ "npm", "start"]