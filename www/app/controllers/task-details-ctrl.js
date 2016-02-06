(function(){
  'use strict';

  angular.module('myTasksApp').controller('taskDetailsCtrl', ['$stateParams', taskDetailsCtrl]);

  function taskDetailsCtrl($stateParams) {
    var vm = this;

    console.log("$stateParams", $stateParams);
  }
})();
