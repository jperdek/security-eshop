FROM node:12.3.1-alpine

WORKDIR /usr/src/app/security-eshop

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular @angular/material && npm install

EXPOSE 4200

CMD ["npm", "start"]