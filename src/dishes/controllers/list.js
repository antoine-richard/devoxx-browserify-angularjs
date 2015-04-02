(function() {

  angular
  .module('dishes')
  .controller('DishesListCtrl', function(dishesData) {

    this.dishes = dishesData.list();

  });

}());