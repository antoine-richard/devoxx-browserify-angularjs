(function() {

  angular
  .module('dishes')
  .controller('DishesListCtrl', function(dishes) {

    this.dishes = dishes.list();

  });

}());