# asmy.dev

my website at [asmy.dev](https://asmy.dev) powered by [11ty](https://11ty.dev), [bulma](https://bulma.io) and [openemoji](https://openemoji.org). The idea stems from "I just wanna get my personal website up and running quickly because I don't have time for this since I got a full time job" ideology. This is where I keep the source code in case I need to do some editing in the future or to showcase how did I do it.

## Table of Contents
- [asmy.dev](#asmydev)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Requirements](#requirements)
    - [Setup](#setup)
    - [Developing with Docker](#developing-with-docker)
    - [Deploying to Production](#deploying-to-production)
  - [Future Plans](#future-plans)
  - [Author](#author)


## Getting Started

### Requirements

- a working laptop
- stable internet connection
- npm installed

### Setup

Simply run this to install 11ty framework in the directory where this repo is unziped or cloned to 
```
npm install @11ty/eleventy --save-dev
```
and then
```
npm start
```
to start developing. This will serve the site at your local machine to see the changes that you've made in real time.

### Developing with Docker

The steps to eliminating the "Works in my Machine" problem. There's a Dockerfile in this project, you need to build the image

```
docker build -t asmydev-11ty .
```

then run it

```
docker run -p 8080:8080 --name asmydev asmydev-11ty
```

enjoy. 

For more info: [DevOps w/ Docker](http://devopswithdocker.com)


### Deploying to Production

I love firebase, therefore

```
firebase init
```
run through all of the setup and then finally
```
firebase deploy
```

## Future Plans

- Add interactive slides for my Portfolio
- Display badges from Credly e.g. ISC2

## Author

[Ahmad Siraj MY](https://linkedin.com/in/asmyio)