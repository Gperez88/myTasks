(function(){
  'use strict';

  angular.module('myTasksApp').controller('taskCtrl', ['$scope', '$state','myTasksApi', taskCtrl]);

  function taskCtrl($scope, $state, myTasksApi) {
    var vm = this;

    vm.loadList = function(forceRefresh){
      myTasksApi.getTodoTasks(forceRefresh).then(function(data){
        vm.todoTasks = data;
      });

      myTasksApi.getDoneTasks(forceRefresh).then(function(data){
        vm.doneTasks = data;
      }).finally(function(){
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    vm.loadList(false);

    vm.selectTask = function(objectId){
      //TODO: select correct task
      $state.go("app.task_details",{'id': objectId});
    };
  };
})();
