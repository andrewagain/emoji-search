.PHONY: run install start build test eject deploy

run: install start

install:
	npm install

start:
	npm run start

build:
	npm run build

test:
	npm run test

eject:
	npm run eject

deploy:
	npm run deploy