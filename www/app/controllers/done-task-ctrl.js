(function(){
  'use strict';

  angular.module('myTasksApp').controller('doneTaskCtrl', ['$state','myTasksApi', taskCtrl]);

  function taskCtrl($state, myTasksApi) {
    var vm = this;

    var doneTasks = myTasksApi.getDoneTasks();

    vm.doneTasks = doneTasks;

    vm.selectTask = function(objectId){
      //TODO: select correct task
      $state.go("home.done_details");
    }
  }
})();
