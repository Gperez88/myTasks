angular.module('myTasksApp', ['ionic', 'angular-cache'])

.run(function($ionicPlatform, CacheFactory) {
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

    // Only to demonstration.
    CacheFactory('taskCache', {storageMode: 'localStorage', maxAge: 10000, deleteOnExpire: 'aggressive'});
    CacheFactory('todoTaskCache', {storageMode: 'localStorage', maxAge: 10000, deleteOnExpire: 'aggressive'});
    CacheFactory('doneTaskCache', {storageMode: 'localStorage', maxAge: 10000, deleteOnExpire: 'aggressive'});
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    // .state('home',{
    //   abstract:true,
    //   url:"/home",
    //   templateUrl: "app/views/home/home.html"
    // })
    //

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
    })

    .state('app.task',{
      url:"/task",
      views: {
        "mainContent":{
          templateUrl:"app/views/task/task.html"
        }
      }
    })

    .state('app.task_details',{
      url:"/task_details/:id",
      views: {
        "mainContent":{
          templateUrl:"app/views/task/details.html"
        }
      }
    });

    $urlRouterProvider.otherwise('/app/login');
});
