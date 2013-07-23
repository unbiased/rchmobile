require.config({
	baseUrl: "/sites/rchmobile/js",
	paths: {
		"angular": "lib/angular",
		"bootstrap":"lib/bootstrap",
		"ui-bootstrap": "lib/ui-bootstrap"
	},
	shim:{
		"angular":{
			exports: "angular"
		},
		"ui-bootstrap":{
			deps: ["angular"]
		}
	}
});

define("app",["angular","bootstrap","ui-bootstrap"],function(angular){
	
});