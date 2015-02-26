var angleBlog = angular.module('angleBlog', [
    'ngRoute',
    'blogControllers',
    'angleFilters',
    'firebase'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/main.html',
        controller: 'IndexController'
    }).
    when('/post/:postId', {
        templateUrl: 'partials/post.html',
        controller: 'PostController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);