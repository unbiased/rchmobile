App.controller("ViewMediaController",["$scope","searchSvc","$routeParams",function($scope,searchSvc,$routeParams){
		$scope.load_video = function(){
			var amoid = $routeParams.amoid;
			searchSvc.fetch_media_object(amoid).then($scope.displayMedia);
		}

		$scope.displayMedia = function(data,status){
			$scope.media  = data.data.data;			
		}
}]);