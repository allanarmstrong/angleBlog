//The reversing filter to display the blogs in reverse order
var filters = angular.module('angleFilters', [])
.filter('reverse', function() {
   return function(items) {
       return items.slice().reverse();
   };
});