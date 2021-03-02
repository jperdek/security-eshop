FROM node:12.3.1-alpine

WORKDIR /usr/src/app/security-eshop

COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install -g @angular/cli @angular-devkit/build-angular @angular/material && npm install

# copy codebase to docker codebase
ADD . /usr/src/app

EXPOSE 4200

CMD ["npm", "start"]