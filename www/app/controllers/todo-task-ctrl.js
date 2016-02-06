(function(){
  'use strict';

  angular.module('myTasksApp').controller('todoTaskCtrl', ['$state','myTasksApi', taskCtrl]);

  function taskCtrl($state, myTasksApi) {
    var vm = this;

    var todoTasks = myTasksApi.getTodoTasks();

    vm.todoTasks = todoTasks;

    vm.selectTask = function(objectId){
      //TODO: select correct task
      $state.go("home.todo_details");
    }
  }
})();
