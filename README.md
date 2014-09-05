# grunt-apimock

> Grunt wrapper around api-mock node module.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apimock --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apimock');
```

## The "apimock" task

### Overview
In your project's Gruntfile, add a section named `apimock` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  apimock: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.port
Type: `Integer`
Default value: `3000`

An integer value that is used to open the apimock server.

#### options.src
Type: `String`
Default value: `./api/api.apib`

A string value that represents the path to the API Blueprint file.

### Usage Examples

#### Default Options
In this example, the default options are used to start an apimock server.

```js
grunt.initConfig({
  apimock: {
    options: {}
  },
});
```

#### Custom Options
In this example, custom options are used to start the api-mock server in port 1235 with another_api.apib as source.

```js
grunt.initConfig({
  apimock: {
    options: {
      port: 3000,
      src: './api/another_api.apib',
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_v0.1.0_ - Initial release
