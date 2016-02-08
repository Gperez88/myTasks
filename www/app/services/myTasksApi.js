(function(){
  'use strict';

  angular.module('myTasksApp').factory('myTasksApi', ['$http', '$q', '$ionicLoading', myTasksApi]);

  function myTasksApi($http, $q, $ionicLoading){

    function getTasks(){
      var deferred = $q.defer();
      $ionicLoading.show({ template: "Loading..." });
      $http.get("http://mytasks.parseapp.com/task/list")
           .success(function(data){
             $ionicLoading.hide();
             deferred.resolve(data);
           }).error(function(){
             console.log("Error while makin HTTP call.");
             $ionicLoading.hide();
             deferred.reject();
           });
      return deferred.promise;
    }

    function getDoneTasks(forceRefresh){
      if(forceRefresh === "undefined") { forceRefresh = false; }

      var deferred = $q.defer();

      if(forceRefresh){
        $ionicLoading.show({ template: "Loading..." });
        $http.get("http://mytasks.parseapp.com/task/donelist")
             .success(function(data){
               $ionicLoading.hide();
               deferred.resolve(data);
             }).error(function(){
               console.log("Error while makin HTTP call.");
               $ionicLoading.hide();
               deferred.reject();
             });
      }
      return deferred.promise;
    }

    function getTodoTasks(forceRefresh){
      if(forceRefresh === "undefined") { forceRefresh = false; }

      var deferred = $q.defer();

      if(forceRefresh){
        $ionicLoading.show({ template: "Loading..." });
        $http.get("http://mytasks.parseapp.com/task/todolist")
             .success(function(data){
               $ionicLoading.hide();
               deferred.resolve(data);;
             }).error(function(){
               console.log("Error while makin HTTP call.");
               $ionicLoading.hide();
               deferred.reject();
             });
      }
      return deferred.promise;
    }

    return{
      getTasks: getTasks,
      getDoneTasks: getDoneTasks,
      getTodoTasks: getTodoTasks
    };
  };
})();
