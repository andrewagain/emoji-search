# Extending image
FROM node

# Versions
RUN npm -v
RUN node -v

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN npm install
RUN yarn install

# Bundle app source
COPY . /usr/src/app

# Port to listener
EXPOSE 3000

# Environment variables
ENV NODE_ENV production
ENV PORT 3000
ENV PUBLIC_PATH "/"

RUN npm run start:build
RUN yarn build

# Main command
CMD [ "npm", "run", "start:server" ]
