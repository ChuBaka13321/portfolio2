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
    {'name': 'My Portfolio',
     'snippet': 'I decided to revisit some Angular as well as try out some new things while building this app.',
     'age': 1,
     'url': 'https://brianc.herokuapp.com/#/view1',
     'imageURL': 'view1/img/sunDerp.png'},
    {'name': 'SunDerp\'s Adventure',
     'snippet': 'A game we built together.',
     'age': 2,
     'url': 'http://sunderp.herokuapp.com/',
     'imageURL': 'view1/img/sunDerp.png'},
    {'name': 'Aliens TicTacToe',
     'snippet': 'My first WDI project',
     'age': 3,
     'url': 'https://tictacchu.firebaseapp.com/',
     'imageURL': 'view1/img/tttaliens.png'},
    {'name': 'About Me',
     'snippet': 'What I originally sent in my application.',
     'age': 4,
     'url': 'http://myfirstwebsite.bitballoon.com/',
     'imageURL': 'view1/img/firstwebsite.png'}
 ];

$scope.orderProp = 'age';

}]);