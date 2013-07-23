App.controller("BrowseController",["$scope","searchSvc",function($scope,searchSvc){
	//initialisation function for controller
	$scope.init = function(){
		searchSvc.get_museum_list().then($scope.bindMuseumList);		
	};

	$scope.bindMuseumList = function(data,status){
		$scope.museum_names = data.data.data; //get the data attribute of the returned json		
	};


	$scope.$watch("selected_museum",function(newValue,oldValue){
		if(newValue !== undefined){
			searchSvc.offset = 0;
			searchSvc.get_collection_by_museum(newValue.Museum).then($scope.displayCollections);
		}
	});

	//display collections from the selected museum
	$scope.displayCollections = function(data,status){
		$scope.collections = data.data.data;
		
	}

}]);