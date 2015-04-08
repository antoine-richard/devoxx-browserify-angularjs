var angular = require('angular');

var dishesModule = angular.module('dishes', [])
.factory('dishesData', require('./data/dishes'))
.controller('DishesListCtrl', require('./controllers/list'))
;

module.exports = dishesModule.name;