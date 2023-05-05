FROM node:16

WORKDIR /asmydev

COPY package.json .

RUN npm install

RUN npm install @11ty/eleventy --save-dev

COPY src ./src

COPY public ./public

COPY .eleventy.js ./.eleventy.js

EXPOSE 8080

CMD ["npm", "start"]