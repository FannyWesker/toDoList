angular.module('toDoList',[])
	.controller('mainCtr', function($scope){
		$scope.task ='';
		$scope.lists = [];
		$scope.add = function(){
			$scope.lists.push($scope.task);
		};
	});