/*global define*/
'use strict';


define(['appRegister','uiRouter','angularRoute'], function (app) {


  
app.run(["$rootScope", "$sessionStorage","$state","$location","roleService","cdsService",function($rootScope, $sessionStorage,$state,$location,roleService,cdsService){

       $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){           
                

       /*    var checkUserSession = cdsService.getUserSession();
           console.log(checkUserSession)            
            checkUserSession
            .success(function(resp){                                                                        
                         
                  if(resp.status == "success"){  
                   
                    cdsService.userAuthenticated = true;
                    cdsService.user = resp.data.user;
                    var userRole = "citizen";                    
                    var privilegeStateArray = roleService.getPrivilegeStateArray(cdsService.user.privileges);                  
                    var isValidModule = roleService.checkValidModule(toState.name,privilegeStateArray);
                                 
                if(toState.secured && !isValidModule || toState.name == "root.signin"){                                  
                     event.preventDefault();
                     $state.go("auth.dashboard");                      
                 }  
             }else{                
                if(toState.secured){
                    event.preventDefault();                                    
                     $state.go("root.signin");                    
                }              
             }  
            })*/
    
        });

}]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
    .otherwise('/');
    


    /*****Non authenticated views*****/

    $stateProvider
    .state('root',{        
         abstract: true,
         url : "",
         views: {
            'header': {
                templateUrl: 'views/nonauth/common/header.html'
            },
            'footer': {
                templateUrl: 'views/nonauth/common/footer.html'                
            }
        }
    })

    .state('root.register',{
        url: '',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/register.html',
                controller : "registerController as registerCtrl"
               
            }
        },
        secured : false
    })

});

});
