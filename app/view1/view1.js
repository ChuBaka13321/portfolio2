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
     'snippet': 'I decided to revisit some Angular as well as try out some new things while building this app. (Area in the Works)',
     'age': 1,
     'url': 'https://brianc.herokuapp.com/#/view1',
     'imageURL': 'view1/img/yosemite.jpg'},
    {'name': 'SunDerp\'s Adventure',
     'snippet': 'My girlfriend and I made a game app together for our final project at GA. We wanted to make a game because we\'re both passionate about games, and this was a great opportunity to do something different from what we learned in class. We used Node as our framework with Javascript, Jquery and the Phaser library. For front-end dependencies we used Bower, and for the back-end we used Grunt. All design and artwork was done using Adobe Photoshop. We had a great time making it, and we want to continue improving it with a database for high score storage, and look into giving it mobile compatibility. Go on, play it! ',
     'age': 2,
     'url': 'http://sunderp.herokuapp.com/',
     'imageURL': 'view1/img/sunDerp.png'},
    {'name': 'Aliens TicTacToe',
     'snippet': 'This was my first WDI project. (Area in the Works)',
     'age': 3,
     'url': 'https://tictacchu.firebaseapp.com/',
     'imageURL': 'view1/img/tttaliens.png'},
    {'name': 'About Me',
     'snippet': 'What I originally sent in my application. (Area in the Works)',
     'age': 4,
     'url': 'http://myfirstwebsite.bitballoon.com/',
     'imageURL': 'view1/img/firstwebsite.png'}
 ];

$scope.orderProp = 'age';
$scope.opacity = true;
}]);