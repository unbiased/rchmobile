App.controller("ViewObjectController",["$scope","$routeParams","searchSvc",function($scope,$routeParams,searchSvc){
	
	$scope.fetch_object = function(){
			var object_id = $routeParams.coid;
			searchSvc.fetch_object(object_id).then($scope.displayObject);
	}

	$scope.displayObject = function(data,status){
		if(data.data.status === "success"){
			$scope.object_info = data.data.data;
		}
	}

	$scope.init = function(){
		$scope.active_tab = "object";
		$scope.fetch_object();
	}

	$scope.$watch("active_tab",function(newValue,oldvalue){
		switch(newValue){
			case "relatedobjects":
				//fetch related object and load to view..with pagination
			break;
			case "media":
				//fetch media if available
			break;


		}
	});
}]);