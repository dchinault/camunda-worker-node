'use strict';

var forEach = require('foreach');

var debug = require('debug')('workers:logger');

/**
 * Enable detailed task worker logging.
 */
function Logger(workers) {

  forEach([
    'start',
    'shutdown',
    'reschedule',
    'error',
    'poll',
    'poll:done',
    'poll:error',
    'fetchTasks',
    'fetchTasks:failed',
    'fetchTasks:success',
    'worker:register',
    'worker:remove',
    'executeTask',
    'executeTask:complete',
    'executeTask:complete:sent',
    'executeTask:failed',
    'executeTask:failed:sent',
    'executeTask:done',
    'executeTask:skip',
    'executeTasks',
    'executeTasks:done',
    'extendLock',
    'extendLock:success',
    'extendLock:failed',
  ], function(event) {

    workers.on(event, function(...args) {
      debug(event, ...args);
    });
  });

}

module.exports = Logger;