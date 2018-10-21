FROM node:8.12.0
WORKDIR /app
ADD . /app
RUN npm install
RUN brew install yarn
RUN npm run-script build
CMD npm test
CMD npm eject
RUN yarn run deploy
EXPOSE 3000
CMD npm start
