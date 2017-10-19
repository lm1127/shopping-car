/**
 * Created by Monkey on 2017/10/18.
 */
var app = angular.module("myApp",["ui.router"]);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("shopCar",{
            url:"/shopCar",
            templateUrl:"App/View/shopCar.html",
            controller:"shopCarController"
        })
    $urlRouterProvider.otherwise("/shopCar");
})