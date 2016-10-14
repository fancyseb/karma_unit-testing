describe("mainController tester", function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    describe('test hi', function() {
        it('hi success', function() {
            var $scope = {};
            var controller = $controller('mainController', {
                $scope: $scope
            });
            expect($scope.text).toEqual("hi");
        });
    });
    describe('changeLang', function() {
        it('checks whether a language is set', function() {
            var $scope = {};
            var controller = $controller('mainController', {
                $scope: $scope
            });
            $scope.default;
            $scope.changeLang();
            expect($scope.default).toEqual("en");
        });
    });
    describe('pop up tester ', function() {
        it('popup success', function() {
            var modalInstance = { // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            var $scope = {};
            var controller = $controller('mainController', {
                $scope: $scope,
                 $uibModalInstance: modalInstance
            });
            $scope.add();
            expect($scope.text).toEqual("hi");
        });
    });
    describe('add row tester', function() {
        it('test Add', function() {
            var modalInstance = { // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            var $scope = {};
            var controller = $controller('popupController', {
                $scope: $scope,
                $uibModalInstance: modalInstance
            });
            $scope.taskid = "100";
            $scope.taskname = "abc";
            $scope.addRow();
            expect($scope.obj).toContain({
                Task_Id: '100',
                Task_Name: 'abc'
            });
        });
    });
    describe('remove tester', function() {
        it('test remove', function() {
            var modalInstance = { // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            var $scope = {};
            var controller = $controller('mainController', {
                $scope: $scope,
                $uibModalInstance: modalInstance
            });
            $scope.remove(0);
            expect($scope.obj).not.toContain({
                Task_Id: '10',
                Task_Name: 'Fancy'
            });
        });
    });
});