'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {

$scope.projects = [
    {'name': 'About Me',
     'snippet': 'What I originally sent in my application.',
     'age': 3,
     'url': 'http://myfirstwebsite.bitballoon.com/',
     'imageURL': 'view1/img/firstwebsite.png'},
    {'name': 'Aliens TicTacToe',
     'snippet': 'My first WDI project',
     'age': 2,
     'url': 'https://tictacchu.firebaseapp.com/',
     'imageURL': 'view1/img/tttaliens.png'},
    {'name': 'SunDerp\'s Adventure',
     'snippet': 'A game we built together.',
     'age': 1,
     'url': 'http://sunderp.herokuapp.com/',
     'imageURL': 'view1/img/sunDerp.png'}
];

$scope.orderProp = 'age';

}]);