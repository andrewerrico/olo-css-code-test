var requireDir = require('require-dir');

// pull in tasks
requireDir('./src/gulp/tasks', { recurse: true });
