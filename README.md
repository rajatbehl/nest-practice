## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Notes
Nest

Quick Hacks

For quickly creating a CRUD controller with the validation built-in, you may use the CLI's CRUD generator: nest g resource [name]

To create a controller using the CLI, simply execute the $ nest g controller [name] command.

To create a service using the CLI, simply execute the $ nest g service cats command.

To create a module using the CLI, simply execute the $ nest g module cats command.

$ nest g module auth
$ nest g controller auth
$ nest g service auth


=======================================================================
Modules

Global modules
If you have to import the same set of modules everywhere, it can get tedious. Unlike in Nest, Angularproviders are registered in the global scope. Once defined, they're available everywhere. Nest, however, encapsulates providers inside the module scope. You aren't able to use a module's providers elsewhere without first importing the encapsulating module.
When you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., helpers, database connections, etc.), make the module global with the @Global() decorator.


=======================================================================
Circuilar Dependency 
Nest enables resolving circular dependencies between providers in two ways
1.  forward referencing - A forward reference allows Nest to reference classes which aren't yet defined using the forwardRef() utility function. For example, if CatsService and CommonService depend on each other, both sides of the relationship can use @Inject() and the forwardRef() utility to resolve the circular dependency. Otherwise Nest won't instantiate them because all of the essential metadata won't be available. 
2. ModuleRef class to retrieve a provider instance from the DI container as another.
=======================================================================

To watch for changes in your files, you can run the following command to start the application:
$ npm run start:dev

This command will watch your files, automatically recompiling and reloading the server.

# Lint and autofix with eslint
$ npm run lint

# Format with prettier
$ npm run format

=======================================================================
Validations

Object schema validation
There are several approaches available for doing object validation in a clean, DRY way. One common approach is to use schema-based validation. Let's go ahead and try that approach.

npm install --save joi

npm i --save class-validator class-transformer

https://github.com/typestack/class-validator

=======================================================================
DTO
Defining dto as interfaces vs classes 
But first (if you use TypeScript), we need to determine the DTO (Data Transfer Object) schema. A DTO is an object that defines how the data will be sent over the network. We could determine the DTO schema by using TypeScript interfaces, or by simple classes. Interestingly, we recommend using classes here. Why? Classes are part of the JavaScript ES6 standard, and therefore they are preserved as real entities in the compiled JavaScript. On the other hand, since TypeScript interfaces are removed during the transpilation, Nest can't refer to them at runtime. This is important because features such as Pipes enable additional possibilities when they have access to the metatype of the variable at runtime.

=======================================================================
Pipes
Pipes have two typical use cases:
* transformation: transform input data to the desired form (e.g., from string to integer)
* validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception

=======================================================================
Exception filters
Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.

=======================================================================
Middleware
Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

=======================================================================
Gaurds
A guard is a class annotated with the @Injectable() decorator, which implements the CanActivate interface.

Guards have a single responsibility. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time. This is often referred to as authorization

Guards are executed after all middleware, but before any interceptor or pipe.
=======================================================================
JWT
npm install --save @nestjs/jwt



TODO
1. Natuaral Transformation
2. validation of query/request params using validation pipeline.




