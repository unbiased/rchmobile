
//define home controller
App.controller("SearchController",function($scope,$location,searchSvc){
    //get search parameters to display
    $scope.parameters = searchSvc.getParameters();
    $scope.num_of_pages;  
    $scope.current_page;
    $scope.show_form = true;
    $scope.load_more = true;
    
    
        
    //method to send and retrieve search results
    $scope.search_item = function(){
            searchSvc.offset = $scope.current_page * searchSvc.pageSize ;            
            //set the keywords
            searchSvc.keywords = $scope.keywords;
            //set the parameters for search
            searchSvc.parameters = $scope.parameters;
            searchSvc.search_item().then($scope.buildResult); 
            
    };
    
    $scope.tickNone = function(i){
        var parameter = $scope.parameters[i];
        for(j = 0; j < parameter.items.length; j++){
               $scope.parameters[i].items[j].checked = false;
               
        }
    };
    
    $scope.tickAll = function(i){
        var parameter = $scope.parameters[i];
        for(j = 0; j < parameter.items.length; j++){
               $scope.parameters[i].items[j].checked = true;
               
        }
    };    
    
    $scope.viewObject = function(){
        alert("Viewing object now");
    }
    
       
    
    $scope.buildResult = function(data,status){
        var tempResult = data.data.results;
        if(tempResult !== undefined && ($scope.current_page === undefined || $scope.current_page === 0 )){
                $scope.search_results = tempResult;
                $scope.num_of_pages = Math.floor($scope.search_results.count/searchSvc.pageSize);
                $scope.current_page = 0;
            }else if($scope.search_results.resultcount > 0 && $scope.current_page > 0){
                $scope.search_results = tempResult;                
            }           
    };
    
    $scope.init = function(){
        
    }
    
    $scope.$watch("current_page",function(newvalue,oldvalue){
        $scope.search_item();
    });
});

