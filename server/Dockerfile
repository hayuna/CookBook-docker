FROM node:lts-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 5000

#development
# CMD ["npm", "run", "dev"]

#production
CMD ["npm", "run", "prod"]
