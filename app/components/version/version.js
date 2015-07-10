'use strict';

angular.module('iahmDBApp.version', [
  'iahmDBApp.version.interpolate-filter',
  'iahmDBApp.version.version-directive'
])

.value('version', '0.1');
