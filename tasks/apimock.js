/*
 * grunt-apimock
 * https://github.com/matias.gea/grunt-apimock
 *
 * Copyright (c) 2014 Matias Gea
 * Licensed under the MIT license.
 */

'use strict';

var apimock = require('api-mock');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('apimock', 'Grunt wrapper for API-Mock', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      port: 3000,
      src: './api/api.apib'
    });

    var apimockConfiguration = {
      'blueprintPath': options.src,
      'options': options
    };

    var apimockInstance = new apimock(apimockConfiguration);

    apimockInstance.run();

    console.log('Mock API server running at http://localhost:' + apimockConfiguration.options.port + ', serving ' + options.src);

  });

};
