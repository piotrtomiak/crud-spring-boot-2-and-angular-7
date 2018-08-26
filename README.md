# CRUD App with Angular 7.0 and Spring Boot 2.1

Application contains two modules:
* client - frontend generated using Angular CLI (https://cli.angular.io)
* server - backend generated using Spring IO (https://start.spring.io)


## Technology stack:

* Java 8
* Angular 7.0
* Angular Material
* Angular CLI
* Spring Boot 2.1
* Gradle


## Prerequisites:

* Java 8
* Node.js 8+


## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/pchrzasz/crud-spring-boot-2-and-angular-7.git
cd crud-spring-boot-2-and-angular-7
```

To run the server, cd into the `server` folder and run:
 
```bash
gradle bootRun
```

To run the client, cd into the `client` folder and run:
 
```bash
npm install && npm start
```

## Development

To build the application and start a web server (auto update during development)
 
```bash
ng serve
```