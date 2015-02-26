var blogControllers = angular.module('blogControllers', []);


blogControllers.controller("IndexController", ["$scope", "$http", "$firebase", function($scope, $http, $firebase) {
    
    var ref = new Firebase("https://luminous-fire-6196.firebaseio.com/");

    var sync = $firebase(ref);

    $scope.posts = sync.$asArray();

}]);


blogControllers.controller("PostController", ["$scope", "$http", "$firebase", "$routeParams", function($scope, $http, $firebase, $routeParams) {
    var ref = new Firebase("https://<your firebase url>.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.postId = $routeParams.postId;
    $scope.posts = sync.$asArray();
}]);
    