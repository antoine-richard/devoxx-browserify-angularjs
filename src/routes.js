(function() {

  angular
  .module('gastronomyApp')
  .config(function($routeProvider) {

    $routeProvider
      .when('/dishes', { controller : 'DishesListCtrl', controllerAs : 'list', templateUrl : 'partials/dishes/list.html' })
      .otherwise(      { redirectTo : '/dishes' });
      
  });

}());