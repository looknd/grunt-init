/*
 * grunt-init
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a commonjs module, including Nodeunit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main'),
    init.prompt('npm_test', 'grunt nodeunit')
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      // TODO: ADJUST VERSIONS FOR 0.4.0 FINAL
      'grunt-contrib-concat': '0.1.2rc6',
      'grunt-contrib-uglify': '0.1.1rc6',
      'grunt-contrib-jshint': '0.1.1rc6',
      'grunt-contrib-nodeunit': '0.1.2rc6',
      'grunt-contrib-watch': '0.2.0rc5',
      // TODO: REMOVE FOR 0.4.0 FINAL
      'grunt': '0.4.0rc6',
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
