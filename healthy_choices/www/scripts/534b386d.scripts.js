"use strict";angular.module("healthyChoicesApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("healthyChoicesApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","Phonegap","Bootstrap 3.0.2"]}]);