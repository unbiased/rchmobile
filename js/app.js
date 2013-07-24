
var App = angular.module("RchMobile",["RchMobile.Search","ui.bootstrap","filters"]);

//configure route for the entire application
App.config(["$routeProvider","$httpProvider",function($routeProvider,$httpProvider){
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
        })
       .when("/viewobject/:coid",{
        templateUrl: "views/view_object.html",
        controller: "ViewObjectController"
       })
       .when("/media_player/:amoid",{
            templateUrl: "views/play_media.html",
            controller: "ViewMediaController"
       })
       .when("/browse",{
          templateUrl: "views/browse.html",
          controller: "BrowseController"
       })
       .otherwise({redirectTo:"/"});

       $httpProvider.defaults.useXDomain = true;
       delete $httpProvider.defaults.headers.common["X-Requestd-With"];
}]);


