(function() {

  angular
  .module('dishes')
  .factory('dishes', function() {

    var dishes = [
      { name: 'Galette-saucisse', type: 'Plat principal', image: 'images/1.jpg' },
      { name: 'Kig ha farz',      type: 'Plat principal', image: 'images/5.jpg' },
      { name: 'Kouign-amann',     type: 'Dessert',        image: 'images/4.jpg' },
      { name: 'Far breton',       type: 'Dessert',        image: 'images/2.jpg' },
      { name: 'Crêpes',           type: 'Dessert',        image: 'images/3.jpg' }
    ];

    return {
      list: function() {
        return dishes;
      }
    }

  });

}());