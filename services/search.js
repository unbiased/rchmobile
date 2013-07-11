
var searchService = angular.module("RchMobile.Search", []);

searchService.service("searchSvc", ["$http", function($http) {
        var search = {};

        var searchResult;
        search.offset = 0;
        search.pageSize = 10;
        var parameters = {};
        
        search.keywords = "";
        
        search.parameters = {};

        search.getSearchResult = function() {
            return searchResult;
        }

        search.getParameters = function() {
            var params = [];
            $http.get("data/search_parameters.json")
                    .success(function(data, status, headers, config) {
                for (i = 0; i < data.parameters.length; i++) {
                    var name = data.parameters[i].group;
                    var key = data.parameters[i].key;
                    var items = [];
                    var itemValues = data.parameters[i].params;
                    for (j = 0; j < itemValues.length; j++) {
                        items.push({"name": itemValues[j].name, "value": itemValues[j].value, "checked": true});
                    }
                    params.push({"group": name, "key": key, items: items});
                }
            });
            return params;
        };
//        //method for searching. Data to be sent in Param format specified in parameters function.
//        search.search_item = function(keywords, params) {
//            result = [];
//            categories = params;
//            //filter unchecked attributes from searchcategories
//            for (i = 0; i < categories.length; i++) {
//                //get all items in the collection and remove unchecked attributes
//                for (j = 0; j < categories[i].items.length; j++) {
//                    if (!categories[i].items[j].checked) {
//                        categories[i].items.splice(j, 1);
//                    }
//                }
//            }
//            url = "http://localhost/sites/v12.8/index.php/service/restservice/search_item/";
//            url += "offset/" + offset + "/size/" + pageSize + "/format/json";
//            var search_params = {"keywords": keywords, "data": categories};
//
//            $http.post(url, search_params).then(function(response) {
//                searchResult = response.data.results;
//            }, function(data) {
//                searchResult = {"count": 0};
//            });
//            return searchResult;
//        };
        search.search_item = function() {
            result = [];
            categories = this.parameters;
            //filter unchecked attributes from searchcategories
            for (i = 0; i < categories.length; i++) {
                //get all items in the collection and remove unchecked attributes
                for (j = 0; j < categories[i].items.length; j++) {
                    if (!categories[i].items[j].checked) {
                        categories[i].items.splice(j, 1);
                    }
                }
            }
            url = "http://localhost/sites/v12.8/index.php/service/restservice/search_item/";
            url += "offset/" + this.offset + "/size/" + this.pageSize + "/format/json";
            var search_params = {"keywords": this.keywords, "data": categories};

            return  $http.post(url, search_params);
        };


        return search;
    }]);

