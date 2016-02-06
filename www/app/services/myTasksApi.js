(function(){
  'use strict';

  angular.module('myTasksApp').factory('myTasksApi',[myTasksApi]);

  function myTasksApi(){

    var doneTasks = JSON.parse('[{"createdAt": "2016-02-06T12:56:35.055Z", "done": true, "name": "preparar el desayuno", "updatedAt": "2016-02-06T12:56:37.047Z","objectId": "almSN8nIIh"},{"createdAt": "2016-02-06T12:56:21.610Z","done": true,"name": "sacar al perro","updatedAt": "2016-02-06T12:56:23.816Z","objectId": "0W7fyrzHUO"}]');
    var todoTasks = JSON.parse('[{"createdAt": "2016-02-06T12:56:35.055Z", "done": false, "name": "pagar el banco", "updatedAt": "2016-02-06T12:56:37.047Z","objectId": "almSN8nIIh"},{"createdAt": "2016-02-06T12:56:21.610Z","done": false,"name": "hacer la compra","updatedAt": "2016-02-06T12:56:23.816Z","objectId": "0W7fyrzHUO"}]');

    function getDoneTasks(){
      return doneTasks;
    }

    function getTodoTasks(){
      return todoTasks;
    }

    return{
      getDoneTasks: getDoneTasks,
      getTodoTasks: getTodoTasks
    };
  };
})();
