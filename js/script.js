var app = angular.module('app', ['ui.bootstrap', 'pascalprecht.translate']);
app.config(function($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/i18n/{part}/{lang}.json'
    });
});
var dataArray;
app.controller('mainController', ['$scope', '$uibModal', '$translatePartialLoader', '$translate', function($scope, $uibModal, $translatePartialLoader, $translate) {
    $scope.obj = [{
        Task_Id:'10',
        Task_Name:"Fancy"
    }];
    $scope.text="hi";
    dataArray=$scope.obj;
     $scope.default='en';
     $translatePartialLoader.addPart('src');
     $translate.refresh();
     $translate.use($scope.default);
     $scope.changeLang=function(){
      $translate.use($scope.default);
     }
    $scope.add = function() {
      $translatePartialLoader.addPart('popup');
      $translate.refresh();
      $translate.use($scope.default); 
        var modalInstance = $uibModal.open({
            templateUrl: 'popup.html',
            controller: "popupController",
            resolve: {
                dataArray: function() {
                    return $scope.obj;
                }
            }
        });
    } /*function add ends*/
    $scope.remove = function(id) {
        $scope.obj.splice(id, 1);
    } /*function remove ends*/
}]); /*maincontroller ends*/
app.controller('popupController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    
    $scope.obj = dataArray;
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    } /*cancel ends*/
    $scope.addRow = function() {
        if ($scope.taskid == null) {
            $scope.req1 = 0;
        }
        if ($scope.taskname == null) {
            $scope.req2 = 0;
        }
        if ($scope.taskid != null && $scope.taskname != null) {
            var flag = 0;
            $scope.req1 = 1;
            $scope.req2 = 1;
            for (var i = 0; i < $scope.obj.length; i++) {
                if ($scope.obj[i].Task_Id == $scope.taskid) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                $scope.obj.push({
                    Task_Id: $scope.taskid,
                    Task_Name: $scope.taskname
                });
                $scope.taskid = null;
                $scope.taskname = null;
                $uibModalInstance.dismiss('cancel');
            } else {
                $scope.taskid = null;
                $scope.taskname = null;
            }
        }
    } /*addrow function ends*/
}]);