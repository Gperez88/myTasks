(function(){
  'use strict';

  angular.module('myTasksApp').controller('taskDetailsCtrl', ['$stateParams', 'myTasksApi', taskDetailsCtrl]);

  function taskDetailsCtrl($stateParams, myTasksApi) {
    var vm = this;

    vm.taskId = $stateParams.id;

    myTasksApi.getTasks().then(function(data){
      var task = _.find(data, { "objectId": vm.taskId });
      vm.task = task;
    });
  }
})();
