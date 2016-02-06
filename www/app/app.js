angular.module('myTasksApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('home',{
      abstract:true,
      url:"/home",
      templateUrl: "app/views/home/home.html"
    })

    .state('home.todo',{
      url:"/todo",
      views: {
        "tab-todo":{
          templateUrl:"app/views/task/todo.html"
        }
      }
    })

    .state('home.done',{
      url:"/done",
      views: {
        "tab-done":{
          templateUrl:"app/views/task/done.html"
        }
      }
    })

    .state('home.todo_details',{
      url:"/todo_details/:id",
      views: {
        "tab-todo":{
          templateUrl:"app/views/task/details.html"
        }
      }
    })

    .state('home.done_details',{
      url:"/done_details/:id",
      views: {
        "tab-done":{
          templateUrl:"app/views/task/details.html"
        }
      }
    })

    .state('app',{
      abstract:true,
      url:"/app",
      templateUrl:"app/views/layout/menu-layout.html"
    })

    .state('app.login',{
      url:"/login",
      views: {
        "mainContent":{
          templateUrl:"app/views/login/login.html"
        }
      }
    });

    $urlRouterProvider.otherwise('/app/login');
});
