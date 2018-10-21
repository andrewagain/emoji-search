FROM node:8.12.0
WORKDIR /app
ADD . /app
RUN npm install
RUN brew install yarn
RUN npm start
RUN npm run-script build
RUN npm test
RUN npm eject
RUN yarn run deploy
EXPOSE 3000
CMD npm start
