App.directive("videoPoster",function(){
	return{
		restrict: "A",
		link: function postLink(scope,iElement,iAttrs){
			iAttrs.$observe("videoPosterUrl",function(value){
				iElement.attr("poster",value);
			});
						
		}
	}
});