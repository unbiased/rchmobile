
var App = angular.module("RchMobile",["RchMobile.Search"]);

//configure route for the entire application
App.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/",{
            templateUrl: "views/home.html",
            controller: "HomeController"
        })
        .when("/search",{
            templateUrl: "views/searchform.html",
            conroller: "SearchController"
        })
       .when("/search_results",{
            templateUrl:"views/search_results.html",
            controller:"SearchController"
        }).otherwise({redirectTo:"/"});
}]);

