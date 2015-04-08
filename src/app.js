var angular = require('angular');

angular.module('gastronomyApp', [
  require('angular-route'), 
  require('./dishes')
])
.config(require('./routes'))
;