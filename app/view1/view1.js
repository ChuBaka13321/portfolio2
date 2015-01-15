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
     'snippet': 'I decided to try out some new things while building my portfolio. I decided to revisit AngularJS to display my project section, looked into some jQuery scrolling tutorials, as well as put the project on a Node backend once again. I still want to dive deeper into Node and more Angular when I get the chance, but this was a nice refresher and I look forward to revising more when I can!',
     'age': 1,
     'url': 'https://brianc.herokuapp.com/#/view1',
     'imageURL': 'view1/img/yosemite.jpg'},
    {'name': 'SunDerp\'s Adventure',
     'snippet': 'My girlfriend and I made a game app together for our final project at GA. We wanted to make a game because we\'re both passionate about games, and this was a great opportunity to do something different from what we learned in class. We used Node as our framework with Javascript, Jquery and the Phaser library(which we actually had to learn on our own). For front-end dependencies we used Bower, and for the back-end we used Grunt. All design and artwork was done using Adobe Photoshop. We had a great time making it, and we want to continue improving it with a database for high score storage, and look into giving it mobile compatibility. Go on, play it! ',
     'age': 2,
     'url': 'http://sunderp.herokuapp.com/',
     'imageURL': 'view1/img/sunDerp.png'},
    {'name': 'Aliens TicTacToe',
     'snippet': 'This was my first WDI project. I was excited to build this with an Aliens\' series theme to it. Colonial Marines vs. Xenomorphs with Hudson\'s motion tracker, audio included! For this project we explored both firebase and AngularJS while building on top of our html and css skills.',
     'age': 3,
     'url': 'https://tictacchu.firebaseapp.com/',
     'imageURL': 'view1/img/tttaliens.png'},
    {'name': 'About Me',
     'snippet': 'This was what I originally sent in my application to General Assembly. At the time I was attempting to learn JavaScript and didn\t exactly understand what it was and how it worked really. All I knew was some html and css from some very basic tutorials. I felt like there was this hurdle that I wanted to get past and drove me to attend General Assembly.',
     'age': 4,
     'url': 'http://myfirstwebsite.bitballoon.com/',
     'imageURL': 'view1/img/firstwebsite.png'}
 ];

$scope.orderProp = 'age';
$scope.opacity = true;
}]);