# Vourcher Proxy Server

Vourcher Proxy server integrates the microservices created in the Vourcher project in collaboration with the TenderloinCodeDealers organization. Services include:
- Carousel that serves both static images and videos.
- Side bar for product purchasing options.
- Ratings and reviews
- Recently viewed deals

## Table of Contents

1. [Getting Started](#getting-started)
1. [Prerequisites](#prerequisites)
1. [Installing](#installing)
1. [Usage](#usage)
1. [Deployment](#deployment)
1. [Related Projects](#related-projects)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.

### Installing

```
npm install
```

## Usage

>Before Running
Vourcher Proxy Server depends on having the servers for the carousel, sidebar, reviews, and recently viewed deals running.

To start the server run
```
npm start
```
To see Vourcher Proxy Server in action, in a browser visit:
```
http://localhost:3000/<NUMBER_FROM_1_TO_100>
```

## Deployment

[Dockerize](https://docs.docker.com/) this project and deploy it with your favorite webservice, like [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)!

## Built With

* [Node.js](https://nodejs.org/en/)

## Related Projects

- https://github.com/TenderloinCodeDealers/side-bar
- https://github.com/TenderloinCodeDealers/ratings-reviews
- https://github.com/TenderloinCodeDealers/recently-viewed-deals
- https://github.com/TenderloinCodeDealers/photo-carousel

## Authors

* **Chii-Jones Law** - *Initial work* - [chiijlaw](https://github.com/chiijlaw)

See also the list of [contributors](https://github.com/TenderloinCodeDealers) who participated in this project.

## License

This project is licensed under the MIT License
