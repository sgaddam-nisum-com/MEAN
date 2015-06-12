/*global define*/
 

define(['angular',
	'uiRouter',
	"ngStorage",
	'services/common/serviceLoader',
	'services/registerService',
	"services/common/appModalService",
	"controllers/profileController",
	"directives/resourceDirective",
	"directives/datePickerDirective",
	"directives/navDropdownDirective",
	"controllers/headerController",
	"directives/accordionDirective",
	"controllers/leftNavController",
	"controllers/personalController",
	"controllers/workController",
	"controllers/voterController",
	"controllers/addressController",
	"controllers/volunteerController",
	"controllers/familyController",
	"controllers/cadreController",
	"modalControllers/cadreDeleteController",
	"directives/voterDirective",
	"directives/addressDirective",
	"controllers/listController",
	"services/listService",
	"bootstrap",
	"angularBootstrap"
	], function (angular) {
    var app = angular.module('CDSUSERPROFILE', ['ui.router',"ngStorage",'serviceModule',"controllerModule","directiveModule","ui.bootstrap"]);    
    return app;
});
