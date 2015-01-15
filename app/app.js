'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// jquery stuff for scrolling!
$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

});

$(document).ready(function() {
    $("#StayOpen").hover(
    function() {
        $("#theBox_2").slideDown(500);
    }, function() {
        $("#theBox_2").slideUp(500);
    });
});

//Node Mailer Jquery stuff////////////////////////////
// $(document).ready(function(){
//     var from,to,subject,text;
//     $("#send_email").click(function(){      
//         to=$("#to").val();
//         subject=$("#subject").val();
//         text=$("#content").val();
//         $("#message").text("Sending E-mail...Please wait");
//         $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
//         if(data=="sent")
//         {
//             $("#message").empty().html("

// Email is been sent at "+to+" . Please check inbox !

// ");
//         }

// });
//     });
// });
//////////////////////////////////////////////////////


$(function() {
 
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });
        } else {
            $('#sticky_navigation').css({ 'position': 'relative' }); 
        }   
    };
     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
 
});
var $sections = $('section');